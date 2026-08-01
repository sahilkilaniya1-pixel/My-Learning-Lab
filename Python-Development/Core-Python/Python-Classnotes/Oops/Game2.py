import random


class Game:
    def play(self, p2, p3):
        p1_match = 0
        p2_match = 0
        p3_match = 0

        turn = 1
        cnum = int(random.random() * 10)  # computer number
        while turn:
            print("Computer generated number is:=", cnum)
            if p1_match == 0:
                self.num = int(random.random() * 10)  # player1 number
                print("Player1 generated number is:=", p1.num)
                if cnum == self.num:
                    print("Player 1: won the match")
                    p1_match = 1
            if p2_match == 0:
                p2.num = int(random.random() * 10)  # player 2 number
                print("Player2 generated number is:=", p2.num)
                if cnum == p2.num:
                    print("Player 2: won the match")
                    p2_match = 1
            if p3_match == 0:
                p3.num = int(random.random() * 10)  # player 3 number
                print("Player3 generated number is:=", p3.num)
                if cnum == p3.num:
                    print("Player 3: won the match")
                    p3_match = 1

            if p1_match == 1 and p2_match == 1 and p3_match == 1:
                turn = 0
            else:
                print("try again.....")


p1 = Game()
p2 = Game()
p3 = Game()


p1.play(p2, p3)
