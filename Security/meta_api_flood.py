import concurrent.futures
import requests

# Meta AI ka GraphQL endpoint
URL = "https://www.meta.ai/api/graphql"

# Aapke Firefox cURL se liye gaye exact headers
HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
    "Accept": "multipart/mixed, application/json",
    "Accept-Language": "en-US,en;q=0.5",
    "Content-Type": "application/json",
    "Origin": "https://www.meta.ai",
    "Referer": "https://www.meta.ai/prompt/bb00cf81-7a37-4f06-b21b-be58bc3cdda3",
    "Connection": "keep-alive"
}

# Aapke cURL se extract ki gayi live session cookies
COOKIE_STRING = (
    "rd_challenge=Q_6hBQSdCRjP_lLUe56gS_xA9cZRVUUUlHSwkWDH5EFVFjXPgRKYSm-MED0ursTHp_IbYQPr4hX50oUpvvXC6hux8iAWioIaHMfl_WCzava4gzggwYLWdL71FBoDgxU; "
    "datr=42upag7gJBNaloUSZNMdpMxX; "
    "wd=1920x320; "
    "dpr=1; "
    "ecto_1_sess=b466e39b-bf04-4004-b59b-8abb5cda62fa.v1%3A-LdTPjHXpnuVkZ1X28qIM-pcPM04a74opwzNM394C59dgLXKi3jH1UWxZjiYxBRxAxYNhNhQaB6Cres2vBBgejyNkQKOxAhAlygpH7zYysrni3Ff-yDC47Pb7tKf1KVze5Urb040RPGyiy978QNacK49cFNoOvhyn1ZdumLLweh7rhaiaJQ6upi--53clYehHZ3jKNDIYjwrHr_OSuOl9fXvYyt-ZbX5nxCx_ay75UuiGh5SWc3Of9XdsMOfEqP87yq-f0DYVETXSlkvDoYrIB7pwFUxEblxXC-eTvJ-curzF9toIaYKFYL3IJnMFFDPYzbzog-lfi_Pyzclf2RrkWrG8RZy9cQeDIooRpliXOhykNKW76iq3OEQYB_YSa4Fi4AuHmrXMz7VctLzSRk2CdS1Ca7c5_2SlahS5lzSS1_wy0Pk3ziBvXOd_ftT35KZC2ABIqy_ThNHhVwl4bSrG2rHmApj6rIaUDDANsvU5pkTbz85RU92iohWdjY%3AppmlFrR8wjV-XMj1%3ABkIYBRuluKtdZKSkkN8O0Q.rH6kcV84dWyiGWEuVEh06Rh39PD0ipjJlJZCUPRJCcg"
)

# Cookies ko dictionary format mein convert karna requests library ke liye
cookies_dict = {}
for cookie in COOKIE_STRING.split("; "):
    if "=" in cookie:
        key, val = cookie.split("=", 1)
        cookies_dict[key] = val

def send_single_request(index):
    # Aapke capture kiye gaye payload (doc_id) ka use karke request structure
    payload = {
        "doc_id": "28c9227bb1129ceab70b5c2ebedc7f53",
        "variables": {
            "conversationId": "bb00cf81-7a37-4f06-b21b-be58bc3cdda3",
            "count": 20
        }
    }
    
    try:
        response = requests.post(URL, json=payload, headers=HEADERS, cookies=cookies_dict, timeout=10)
        print(f"[Request #{index}] Status Code: {response.status_code}")
        
        if response.status_code == 429:
            print(f"[!] 🚨 RATE LIMIT TRIGGERED at request #{index}!")
        elif response.status_code == 200:
            print(f"[Request #{index}] Success / Accepted.")
        else:
            print(f"[Request #{index}] Response snippet: {response.text[:100]}")
            
    except Exception as e:
        print(f"[Request #{index}] Error: {e}")

def run_api_flood():
    print("--- API Flooding Test Shuru Ho Raha Hai ---")
    # Ek sath 50 concurrent requests bhejne ke liye ThreadPoolExecutor
    concurrency_count = 50 
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=concurrency_count) as executor:
        executor.map(send_single_request, range(1, 51))
        
    print("\n[*] API Flood Test Poora Ho Chuka Hai!")

if __name__ == "__main__":
    run_api_flood()