import time
from playwright.sync_api import sync_playwright

def intercept_graphql():
    with sync_playwright() as p:
        # Account B ka profile use kar rahe hain
        user_data_dir = "./meta_browser_profile_account_B"
        
        print("Browser launch ho raha hai (Account B Network Spy)...")
        browser = p.chromium.launch_persistent_context(
            user_data_dir=user_data_dir,
            headless=False,
            viewport={"width": 1280, "height": 800}
        )
        
        page = browser.new_page()
        
        # Network requests ko monitor karne ke liye listener lagate hain
        def log_request(request):
            if "graphql" in request.url or "api" in request.url:
                if request.method == "POST":
                    print(f"\n[API REQUEST] URL: {request.url}")
                    try:
                        post_data = request.post_data
                        if post_data and ("conversationId" in post_data or "bb00cf81" in post_data):
                            print(f"[!] MATCH FOUND IN PAYLOAD: {post_data}")
                    except Exception as e:
                        pass

        page.on("request", log_request)
        
        print("Meta AI open ho raha hai...")
        page.goto("https://www.meta.ai/")
        
        print("---")
        print("Kripya browser window mein:")
        print("1. Account B se login confirm karein.")
        print("2. Koi bhi ek apni khud ki chat open karein taaki hum dekh sakein ki GraphQL request kaise ja rahi hai.")
        print("---")
        
        # 60 seconds ka time dete hain taaki aap browser mein interact kar sakein
        time.sleep(60)
        browser.close()

if __name__ == "__main__":
    intercept_graphql()