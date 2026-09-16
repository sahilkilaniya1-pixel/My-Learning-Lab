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

# Aapka latest working cookie jo curl se mila hai
COOKIE_STRING = (
    "rd_challenge=Q_6hBQSdCRjP_lLUe56gS_xA9cZRVUUUlHSwkWDH5EFVFjXPgRKYSm-MED0ursTHp_IbYQPr4hX50oUpvvXC6hux8iAWioIaHMfl_WCzava4gzggwYLWdL71FBoDgxU; "
    "datr=42upag7gJBNaloUSZNMdpMxX; "
    "wd=1920x320; "
    "dpr=1; "
    "ecto_1_sess=b466e39b-bf04-4004-b59b-8abb5cda62fa.v1%3AiaFDhcAi1lGD3-GMbJJowpLOZgVDC5iRdVu5aZn0sp5QK3pTnf5YstnRTSWAbRfe5z32vSNoWiAm_KJAjlpBk8a4ybMNmJsjx280BVFRCWB3Ctpt0P_WpZ1_fzD17ZTF-O8rC_hIRjFUrjMWYdfeRUAbkv562Iq_DP-u88ySt2ilmanUV5yeSZjyhH9HzMohUN0YWohhnvXEHIN6fhGlYeJKxtQ_lRInjPcMzxQbh07pe6sagmrkN46rsxvXa4i9lV8w4Z5OLAE-Au7VJdgt22p6SNr6BMhgGOHs8VauTWia27Wq4jB6VJ0d8OSGcqRcsF6wcFTgg2GLgHc2S1-VC5RPOe9I18XJpRYK7yCzKhtlYTUeL3btIvaOGk96qHpD6at3TV4i6imdEfwCoz1xH7ukHlROgCgk09fMop7M5Ef7h52riJawgKbGcVz-FKVSTwObkIrk1YYIpku7meqLUxv7KVpPYyvHryGOmApGelRhytxN3RkcqENX9y8%3A6rlEUpfLNOMicTqA%3AByO-e3yECKaYxcL43LFbUw.SW_9VpQMqZBAoYnD6OwRLcztxpid6ja2FEv4NQOoqH4"
)

cookies_dict = {}
for cookie in COOKIE_STRING.split("; "):
    if "=" in cookie:
        key, val = cookie.split("=", 1)
        cookies_dict[key] = val

def send_request(index):
    payload = {
        "doc_id": "2b7fcdc841885a7263eccebaab5cfa3e",
        "variables": {
            "input": {
                "logInvitationImpression": False,
                "conversationId": "bb00cf81-7a37-4f06-b21b-be58bc3cdda3",
                "conversationDepth": index + 2, # Depth change karte hain taki unique lage
                "agentType": "think_fast"
            }
        }
    }
    
    try:
        start_time = time.time()
        response = requests.post(URL, json=payload, headers=HEADERS, cookies=cookies_dict, timeout=15)
        latency = time.time() - start_time
        
        if response.status_code == 200:
            print(f"[Req #{index}] Status: 200 OK | Latency: {latency:.2f}s")
        elif response.status_code == 429:
            print(f"[Req #{index}] 🚨 RATE LIMITED (429) | Latency: {latency:.2f}s")
        else:
            print(f"[Req #{index}] ⚠️ Status Code: {response.status_code} | Latency: {latency:.2f}s")
            
    except Exception as e:
        print(f"[Req #{index}] ❌ Error: {e}")

def run_test():
    print("--- REAL META AI GENERATION LOAD TEST SHURU ---")
    with concurrent.futures.ThreadPoolExecutor(max_workers=15) as executor:
        futures = [executor.submit(send_request, i) for i in range(50)]
        concurrent.futures.wait(futures)
    print("\n[*] Test Sampann Hua!")

if __name__ == "__main__":
    run_test()