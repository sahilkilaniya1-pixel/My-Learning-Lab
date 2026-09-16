import time
from playwright.sync_api import sync_playwright

def test_rate_limiting():
    with sync_playwright() as p:
        user_data_dir = "./meta_browser_profile_account_B"
        
        print("Browser launch ho raha hai (100 Messages Rate Limiting Test)...")
        browser = p.chromium.launch_persistent_context(
            user_data_dir=user_data_dir,
            headless=False,
            viewport={"width": 1280, "height": 800}
        )
        
        page = browser.new_page()
        
        print("Meta AI par ja rahe hain...")
        page.goto("https://www.meta.ai/")
        
        print("\n---")
        print("[!] DHYAAN DEIN:")
        print("1. Browser window mein chat screen par chale jayein.")
        print("2. Jab aapko message type karne ki jagah dikhne lage,")
        print("   tab yahan Terminal mein aakar ENTER daba dein!")
        print("---\n")
        
        input("[*] Chat screen kholne ke baad yahan Terminal mein ENTER dabayein...")
        
        print("\nTest shuru ho raha hai: Hum 100 messages tezi se bhejenge...")
        
        # 100 messages ka loop (1 se lekar 100 tak)
        for i in range(1, 101):
            try:
                print(f"[{i}/100] Message bheja ja raha hai...")
                
                # JavaScript ke zariye direct textarea mein value set karke event fire karte hain
                page.evaluate(f"""() => {{
                    const textareas = document.querySelectorAll("textarea[data-testid='composer-input']");
                    let target = Array.from(textareas).find(el => el.offsetParent !== null) || textareas[0];
                    if (target) {{
                        target.focus();
                        target.value = "Stress Test Message #{i}";
                        target.dispatchEvent(new Event('input', {{ bubbles: true }}));
                        target.dispatchEvent(new Event('change', {{ bubbles: true }}));
                    }}
                }}""")
                
                # Chota gap taaki script tezi se chale (0.3 seconds)
                time.sleep(0.3)
                
                # Keyboard se Enter press karke message send karte hain
                page.keyboard.press("Enter")
                
                # Server par load dalne ke liye chota gap
                time.sleep(0.3)
                
            except Exception as e:
                print(f"[!] Error aa gaya ya block ho gaya: {e}")
                break

        print("\n[*] 100 messages ka test poora ho chuka hai!")
        print("Kripya browser par check karein ki kya beech mein koi CAPTCHA, restriction, ya error aaya hai.")
        
        input("\n[*] Check karne ke baad yahan Terminal mein ENTER dabayein...")
        browser.close()

if __name__ == "__main__":
    test_rate_limiting()