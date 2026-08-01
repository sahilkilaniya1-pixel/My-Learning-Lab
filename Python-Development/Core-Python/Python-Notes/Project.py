# 1.:: pip aur External Libraries
# Python ke pass hazaaron ready-made packages hain jo doosre developers ne banaye hain. Inhe install karne k liye hum terminal/command Prompt(cmd) mein pip tool ka use karte hain.

# Terminal ya Command Prompt mein aise install karte hain:
# pip install requests

# 2. Live data Internet se Mangwana (Requests)
# python ke request module se hum kisi bhi websites ya API se live internet data la sakte hain(jaise live Weather, crypto prices, News).
import tkinter as tk

# Main window banana
root = tk.Tk()
root.title("Mera Pehla Desktop App")
root.geometry("300x200")

# Button ka function
def on_button_click():
    label.config(text="Hello, Sahil!")

# UI Components
label = tk.Label(root, text="Button dabaiye!", font=("Arial", 12))
label.pack(pady=10)

btn = tk.Button(root, text="Click Me", command=on_button_click)
btn.pack()

# App ko open rakhna
root.mainloop()