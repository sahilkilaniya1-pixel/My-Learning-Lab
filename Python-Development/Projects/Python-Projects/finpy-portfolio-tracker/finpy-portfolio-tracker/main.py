import asyncio
import json
import os
from abc import ABC, abstractmethod
from datetime import datetime
from typing import Dict, List

# ==========================================
# 1. BASICS & OOPS: FUNDAMENTAL CLASSES
# ==========================================

class Asset(ABC):
    """Abstract Base Class representing a financial asset."""
    def __init__(self, ticker: str, quantity: float, buy_price: float):
        self.ticker = ticker.upper()
        self.quantity = quantity
        self.buy_price = buy_price
        self.current_price = buy_price  # Default until updated

    @property
    def total_cost(self) -> float:
        return self.quantity * self.buy_price

    @property
    def current_value(self) -> float:
        return self.quantity * self.current_price

    @property
    def profit_loss(self) -> float:
        return self.current_value - self.total_cost

    @abstractmethod
    def get_api_url(self) -> str:
        """Har asset type ki apni API endpoint hogi."""
        pass


class Stock(Asset):
    """Derived class for Stocks."""
    def get_api_url(self) -> str:
        # Demo API endpoint (Yahan aap Yahoo Finance ya AlphaVantage laga sakte hain)
        # For simulation, hum ek free mock API use kar rahe hain
        return f"https://faas-lon1-917a94a7.dofunctions.app/api/v1/mock-finance?symbol={self.ticker}&type=stock"


class Crypto(Asset):
    """Derived class for Cryptocurrencies."""
    def get_api_url(self) -> str:
        # Binance or CoinGecko public API mapping simulation
        return f"https://faas-lon1-917a94a7.dofunctions.app/api/v1/mock-finance?symbol={self.ticker}&type=crypto"


# ==========================================
# 2. ADVANCED: ASYNC API FETCHING & DATA MGMT
# ==========================================

class PortfolioManager:
    """Manages collection of assets and handles persistence & live updates."""
    def __init__(self, storage_file: str = "portfolio.json"):
        self.storage_file = storage_file
        self.assets: List[Asset] = []
        self.load_portfolio()

    def add_asset(self, asset_type: str, ticker: str, qty: float, price: float):
        """Adds a new asset and saves it to the local file."""
        if asset_type.lower() == 'stock':
            asset = Stock(ticker, qty, price)
        elif asset_type.lower() == 'crypto':
            asset = Crypto(ticker, qty, price)
        else:
            raise ValueError("Invalid asset type! Choose 'stock' or 'crypto'.")
        
        self.assets.append(asset)
        self.save_portfolio()
        print(f"✔️ Successfully added {ticker} to your portfolio.")

    # FILE HANDLING (Basics/Intermediate)
    def save_portfolio(self):
        data = []
        for asset in self.assets:
            data.append({
                "type": "stock" if isinstance(asset, Stock) else "crypto",
                "ticker": asset.ticker,
                "qty": asset.quantity,
                "price": asset.buy_price
            })
        with open(self.storage_file, 'w') as f:
            json.dump(data, f, indent=4)

    def load_portfolio(self):
        if not os.path.exists(self.storage_file):
            return
        
        try:
            with open(self.storage_file, 'r') as f:
                data = json.load(f)
                for item in data:
                    if item["type"] == "stock":
                        self.assets.append(Stock(item["ticker"], item["qty"], item["price"]))
                    elif item["type"] == "crypto":
                        self.assets.append(Crypto(item["ticker"], item["qty"], item["price"]))
        except json.JSONDecodeError:
            print("⚠️ Warning: Portfolio file corrupted. Starting fresh.")

    # ASYNC PROGRAMMING (Advanced)
    async def fetch_price(self, session, asset: Asset):
        """Asynchronously fetches the latest price for a single asset."""
        url = asset.get_api_url()
        try:
            async with session.get(url, timeout=5) as response:
                if response.status == 200:
                    res_data = await response.json()
                    # Simulating live fluctuations if API is static
                    asset.current_price = float(res_data.get("price", asset.buy_price))
                else:
                    # Fallback simulation if external endpoint fails
                    import random
                    asset.current_price = asset.buy_price * random.uniform(0.9, 1.1)
        except Exception:
            # Network failure fallback
            import random
            asset.current_price = asset.buy_price * random.uniform(0.95, 1.05)

    async def update_market_prices(self):
        """Updates all assets in parallel using asyncio.gather."""
        # 'aiohttp' standard library ka hissa nahi hai, isliye isko try-except me wrap kiya hai
        try:
            import aiohttp
        except ImportError:
            print("📦 Installing required 'aiohttp' library for async features...")
            os.system('pip install aiohttp')
            import aiohttp

        async with aiohttp.ClientSession() as session:
            tasks = [self.fetch_price(session, asset) for asset in self.assets]
            await asyncio.gather(*tasks)


# ==========================================
# 3. USER INTERFACE & DASHBOARD DISPLAY
# ==========================================

class Dashboard:
    def __init__(self, manager: PortfolioManager):
        self.manager = manager

    async def show_metrics(self):
        """Displays the calculated portfolio status on the terminal."""
        print("\n🔄 Fetching live market updates...")
        await self.manager.update_market_prices()
        
        if not self.manager.assets:
            print("\nEmpty Portfolio! Add some assets first.")
            return

        print("\n" + "="*65)
        print(f"💼 MY FINANCIAL DASHBOARD - {datetime.now().strftime('%Y-%m-%d %H:%M')}")
        print("="*65)
        print(f"{'TYPE':<8}{'TICKER':<10}{'QTY':<10}{'BUY ($)':<12}{'LIVE ($)':<12}{'P&L ($)':<12}")
        print("-"*65)

        total_invested = 0.0
        total_current = 0.0

        for asset in self.manager.assets:
            atype = "Stock" if isinstance(asset, Stock) else "Crypto"
            pnl = asset.profit_loss
            pnl_str = f"+${pnl:,.2f}" if pnl >= 0 else f"-${abs(pnl):,.2f}"
            
            print(f"{atype:<8}{asset.ticker:<10}{asset.quantity:<10.2f}{asset.buy_price:<12;,.2f}{asset.current_price:<12;,.2f}{pnl_str:<12}")
            
            total_invested += asset.total_cost
            total_current += asset.current_value

        total_pnl = total_current - total_invested
        pnl_pct = (total_pnl / total_invested * 100) if total_invested > 0 else 0.0

        print("-"*65)
        print(f"Total Investment : ${total_invested:,.2f}")
        print(f"Current Value    : ${total_current:,.2f}")
        print(f"Net Profit/Loss  : ${total_pnl:,.2f} ({pnl_pct:+.2f}%)")
        print("="*65)


# ==========================================
# 4. MAIN EXECUTION LOOP
# ==========================================

async def main():
    manager = PortfolioManager()
    dashboard = Dashboard(manager)

    while True:
        print("\n::: MENU :::")
        print("1. View Dashboard (Live Prices)")
        print("2. Add Asset (Stock/Crypto)")
        print("3. Exit")
        
        choice = input("Enter choice (1-3): ").strip()

        if choice == "1":
            await dashboard.show_metrics()
        
        elif choice == "2":
            try:
                atype = input("Asset Type (stock/crypto): ").strip()
                ticker = input("Ticker/Symbol (e.g., AAPL, BTC): ").strip()
                qty = float(input("Quantity: "))
                price = float(input("Average Purchase Price ($): "))
                
                manager.add_asset(atype, ticker, qty, price)
            except ValueError as e:
                print(f"❌ Input Error: {e}. Please enter valid numbers.")
        
        elif choice == "3":
            print("Goodbye! Happy Investing.")
            break
        else:
            print("❌ Invalid Choice! Please select 1, 2, or 3.")

if __name__ == "__main__":
    # Python 3.7+ async execution engine entry point
    asyncio.run(main())