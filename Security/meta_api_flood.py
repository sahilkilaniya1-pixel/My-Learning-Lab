import concurrent.futures
import requests
import time

URL = "https://www.meta.ai/api/graphql"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
    "Accept": "multipart/mixed, application/json",
    "Accept-Language": "en-US,en;q=0.5",
    "Content-Type": "application/json",
    "Origin": "https://www.meta.ai",
    "Referer": "https://www.meta.ai/prompt/bb00cf81-7a37-4f06-b21b-be58bc3cdda3",
    "Connection": "keep-alive"
}

COOKIE_STRING = (
    "rd_challenge=Q_6hBQSdCRjP_lLUe56gS_xA9cZRVUUUlHSwkWDH5EFVFjXPgRKYSm-MED0ursTHp_IbYQPr4hX50oUpvvXC6hux8iAWioIaHMfl_WCzava4gzggwYLWdL71FBoDgxU; "
    "datr=42upag7gJBNaloUSZNMdpMxX; "
    "wd=1920x320; "
    "dpr=1; "
    "ecto_1_sess=b466e39b-bf04-4004-b59b-8abb5cda62fa.v1%3A-LdTPjHXpnuVkZ1X28qIM-pcPM04a74opwzNM394C59dgLXKi3jH1UWxZjiYxBRxAxYNhNhQaB6Cres2vBBgejyNkQKOxAhAlygpH7zYysrni3Ff-yDC47Pb7tKf1KVze5Urb040RPGyiy978QNacK49cFNoOvhyn1ZdumLLweh7rhaiaJQ6upi--53clYehHZ3jKNDIYjwrHr_OSuOl9fXvYyt-ZbX5nxCx_ay75UuiGh5SWc3Of9XdsMOfEqP87yq-f0DYVETXSlkvDoYrIB7pwFUxEblxXC-eTvJ-curzF9toIaYKFYL3IJnMFFDPYzbzog-lfi_Pyzclf2RrkWrG8RZy9cQeDIooRpliXOhykNKW76iq3OEQYB_YSa4Fi4AuHmrXMz7VctLzSRk2CdS1Ca7c5_2SlahS5lzSS1_wy0Pk3ziBvXOd_ftT35KZC2ABIqy_ThNHhVwl4bSrG2rHmApj6rIaUDDANsvU5pkTbz85RU92iohWdjY%3AppmlFrR8wjV-XMj1%3ABkIYBRuluKtdZKSkkN8O0Q.rH6kcV84dWyiGWEuVEh06Rh39PD0ipjJlJZCUPRJCcg"
)

cookies_dict = {}
for cookie in COOKIE_STRING.split("; "):
    if "=" in cookie:
        key, val = cookie.split("=", 1)
        cookies_dict[key] = val

def send_request(index):
    payload = {
        "doc_id": "28c9227bb1129ceab70b5c2ebedc7f53",
        "variables": {
            "conversationId": "bb00cf81-7a37-4f06-b21b-be58bc3cdda3",
            "count": 20
        }
    }

    try:
        response = requests.post(URL, json=payload, headers=HEADERS, cookies=cookies_dict, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if "errors" in data:
                print(f"[Request #{index}] ⚠️ GraphQL Error: {data['errors'][0].get('message')}")
            else:
                print(f"[Request #{index}] Status: 200 OK")
        elif response.status_code == 429:
            print(f"[Request #{index}] 🚨 RATE LIMITED (429 Too Many Requests)!")
        else:
            print(f"[Request #{index}] ⚠️ Status Code: {response.status_code}")
            
    except Exception as e:
        print(f"[Request #{index}] ❌ Error: {e}")

def run_sustained_test():
    print("--- SUSTAINED DURATION FLOOD TEST (60 Seconds) SHURU ---")
    
    duration_seconds = 60  # Test 1 minute tak chalega
    end_time = time.time() + duration_seconds
    request_counter = 1
    
    # 50 concurrent workers ka pool jo lagataar requests fire karega
    with concurrent.futures.ThreadPoolExecutor(max_workers=50) as executor:
        while time.time() < end_time:
            # Batch mein requests submit karte raho
            futures = [executor.submit(send_request, request_counter + i) for i in range(10)]
            request_counter += 10
            time.sleep(0.2)  # Thoda gap taaki CPU overload na ho
            
    print(f"\n[*] Sustained Duration Test Poora Ho Chuka Hai! Total Requests Sent: {request_counter}")

if __name__ == "__main__":
    run_sustained_test()