# Interchanging First and Last Elements in a List
# Method 1: Direct Assignment
lst = [56, 234, 576, 8765]
lst[0], lst[-1] = lst[-1], lst[0]
print("Interchanged list:", lst)  # Output: [8765, 234, 576, 56]

# Method 2: Using a Tuple Variable
lst = [56, 234, 576, 8765]
pair = lst[-1], lst[0]
lst[-1], lst[0] = pair
print("Interchanged list:", lst)  # Output: [8765, 234, 576, 56]

# Method 3: Using the Asterisk (* Operator)
lst = [56, 234, 576, 8765]
a, *mid, b = lst
lst = [b, *mid, a]
print("Interchanged list:", lst)  # Output: [8765, 234, 576, 56]

# Method 4: Using Slicing
lst = [21, 45, 234, 67]
lst = lst[-1:] + lst[1:-1] + lst[:1]
print("Interchanged list:", lst)  # Output: [67, 45, 234, 21]

# Method 5: Using a Temporary Variable
lst = [123, 34, 142, 3245]
tmp = lst[0]
lst[0] = lst[-1]
lst[-1] = tmp
print("Interchanged list:", lst)  # Output: [3245, 34, 142, 123]


# Swapping Two Elements in a List
# Method 1: Multiple Assignment (by index)
a = [123, 56, 435, 654, 56]
a[0], a[4] = a[4], a[0]
print("List after swap:", a)  # Output: [56, 56, 435, 654, 123]

# Method 2: Swapping two variables without a temporary variable
a = 5
b = 10
a, b = b, a
print(f"a: {a}, b: {b}")  # Output: a: 10, b: 5
