# Class Bank:
class Bank:
    def openAccount(self,x,y):
        self.accNo=x
        self.balance=y
    def showBalance(self):
        print("Account No:=",self.accNo)
        print("Balance:=",self.balance)
    def deposit(self,money):
        self.balance= self.balance+money
    def withdrawl(self,money):
        if(money>self.balance):
            print("Insufficient balance")
        else:
            self.balance= self.balance-money

cust1=Bank()
cust2=Bank()
cust3=Bank()


cust1.openAccount(101,10000)
cust2.openAccount(202,20000)
cust3.openAccount(303,30000)


cust1.deposit(5500)
cust1.withdrawl(24500)

cust1.showBalance()
cust2.showBalance()
cust3.showBalance() 