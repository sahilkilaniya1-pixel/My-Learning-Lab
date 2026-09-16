# import os
# import requests

# cookie = os.environ.get("META_COOKIE_HEADER", "").strip()

# print("Cookie configured:", bool(cookie))
# print("Cookie length:", len(cookie))

# headers = {
#     "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
#     "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
# }

# # Cookie sirf environment variable available hone par bhejo
# if cookie:
#     headers["Cookie"] = cookie

# r = requests.get(
#     "https://www.meta.ai/",
#     headers=headers,
#     timeout=20,
#     allow_redirects=True,
# )

# print("\n--- Response Diagnostics ---")
# print("Homepage HTTP:", r.status_code)
# print("Final URL:", r.url)
# print("History:", [(x.status_code, x.url) for x in r.history])
# print("Server:", r.headers.get("server", "<blank>"))
# print("Content-Type:", r.headers.get("content-type", "<blank>"))
# print("Location:", r.headers.get("location", "<blank>"))
# print("WWW-Authenticate:", r.headers.get("www-authenticate", "<blank>"))

# print(
#     "Set-Cookie present:",
#     any(k.lower() == "set-cookie" for k in r.headers)
# )

# print("Response length:", len(r.content))


# import requests

# headers = {
#     "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
#     "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
# }

# r = requests.get(
#     "https://www.meta.ai/",
#     headers=headers,
#     timeout=20,
#     allow_redirects=True,
# )

# print("--- No-Cookie Test ---")
# print("HTTP:", r.status_code)
# print("Final URL:", r.url)
# print("History:", [(x.status_code, x.url) for x in r.history])
# print("Content-Type:", r.headers.get("content-type", "<blank>"))
# print("Location:", r.headers.get("location", "<blank>"))
# print("Response length:", len(r.content))





import requests

r = requests.get(
    "https://www.meta.ai/",
    headers={
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    timeout=20,
)

print("HTTP:", r.status_code)
print("URL:", r.url)
print("HTTP version:", getattr(r.raw, "version", "<unknown>"))
print("Content-Type:", r.headers.get("content-type", "<blank>"))
print("Response length:", len(r.content))
print("Response preview:", r.text[:100].replace("\n", " "))