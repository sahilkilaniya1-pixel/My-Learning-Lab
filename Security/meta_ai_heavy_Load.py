import os
import requests
# 1. Cookie configure karein (Environment variable se ya direct string mein)
cookie = os.environ.get("META_COOKIE_HEADER", "").strip()
# Agar environment variable set nahi hai, toh aap apni full cookie string yahan bhi dal sakte hain
if not cookie:
    cookie = "ecto_1_sess=...; datr=..." # Yahan apni working cookies paste karein
headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
    "Accept": "multipart/mixed, application/json",
    "Content-Type": "application/json",
    "Referer": "https://www.meta.ai/prompt/bb00cf81-7a37-4f06-b21b-be58bc3cdda3",
    "Cookie": cookie
}
# 2. GraphQL Payload (jo aapne browser Network tab / JSON payload mein dekha hai)
payload = {
    "doc_id": "4d52c36b3193afd66184b4acf1e3bb40",
    "variables": {
        "conversationId": "bb00cf81-7a37-4f06-b21b-be58bc3cdda3",
        "count": 20
    }
}
print("Sending GraphQL POST request...")
# 3. POST request execute karna /api/graphql endpoint par
r = requests.post(
    "https://www.meta.ai/api/graphql",
    headers=headers,
    json=payload,
    timeout=20
)

print("\n--- Response Diagnostics ---")
print("HTTP Status:", r.status_code)
print("Content-Type:", r.headers.get("content-type", "<blank>"))
print("Response length:", len(r.content))
print("Response Preview:", r.text[:500])  # Response ka shuruati data dekhne ke liye