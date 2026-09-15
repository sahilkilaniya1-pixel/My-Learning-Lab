import json
import requests

url = "https://www.meta.ai/api/graphql"

headers = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0"
    ),
    "Accept": "multipart/mixed, application/json",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Referer": "https://www.meta.ai/prompt/2b010fae-1862-45cd-a522-453b745021fa",
    "Content-Type": "application/json",
    "Origin": "https://www.meta.ai",
    "Connection": "keep-alive",
    "Cookie": (
        "rd_challenge=Q_6hBQS7EpWOCeMPaHovoZW6jPlGOACHk81gzYPxAJkODSg2BGgDhNRS95ghf9a7vioSaCtbHjccNFJfoyCcHPo35nfG; "
        "datr=42upag7gJBNaloUSZNMdpMxX; wd=1920x320; dpr=1; "
        "ecto_1_sess=b466e39b-bf04-4004-b59b-8abb5cda62fa.v1%3AaVZfr76vM4iaNyTyeZdLZobkz0aQ3Zpcs0Gz_XoaqUMzV_YH1tj19nFyD-RC_Ak59norU6DybKVlHxiog6Ddc0lQNejeqVMMOC81jTuBe-RTVJMKtmxdS6s6p0tyvBTwLKiQiIzD1_zYwPS-CvXylgCVYpDmD1aXNIYSgqXVsLtm4Arf_dIEm3u_iopJUAOzgNlyz0VaJ4Ky1MwRoYIgso0fQNt3TPbztRKcI8Ng5uiRY32mCdNeBv6sq0f6uWByh6aT4-BL1jxb6hKIcgA1o6hlTGQQWiwOzQXd8VhvWQXz_p3CqArLE-1mXdeBWYpWURB31PlmXhSAnN_zl1TmwwOtfZEcm60IOHL6vLDOdjM4MPXttkbSESkZHOmSFcKgtJMheRFgc608XveE1IZ-Or_JTB8S3VY1pEMqJ-LXeYrTjunOeytl1mm-DGiZ2Hv6iRp8_8ADWF6Wdj8BtqYXvzcmlj5DkTZZOjOwDHz_5vTWbWhWN7D-gX4kAe8%3AN-UqljCQ4RqWp6xt%3AHi48bbSN9Znes3TFlHHxhg.c1z2h-TTlFLUTwOmiqprBakiBuj2uNC1P8b4MVFX4mY"
    ),
}

# Yahan apna message set karein
user_message = "Hello, yeh mera automated message hai!"

payload = {
    "doc_id": "2b7fcdc841885a7263eccebaab5cfa3e",
    "variables": {
        "input": {
            "logInvitationImpression": False,
            "conversationId": "2b010fae-1862-45cd-a522-453b745021fa",
            "conversationDepth": 1,
            "agentType": "think_fast",
            # Agar text key 'message' ya 'prompt' hai, toh usko yahan add kiya ja sakta hai:
            "message": user_message,
        }
    },
}

response = requests.post(url, headers=headers, json=payload)

print("Status Code:", response.status_code)
print("Response:", response.text)