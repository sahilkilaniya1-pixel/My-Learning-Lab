mains_cutoff = 90
advance_cutoff = 100

# Get user input
mains_score = float(input("Enter your Mains percentile: "))

if mains_score >= mains_cutoff:
    advance_score = float(input("Enter your Advance score: "))
    if advance_score >= advance_cutoff:
        print("Congratulations! IIT awaits.")
    else:
        print("Mains cleared! Time to look at NITs/IIITs.")
else:
    print("Don't lose heart. Prepare harder for the next attempt!")