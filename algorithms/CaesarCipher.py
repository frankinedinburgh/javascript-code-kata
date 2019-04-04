def caesarCipher(str, num):
    num = num % 26
    lowerCaseString = str.lower()
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split()
    answer = ''
    for i in len(lowerCaseString):
        current = lowerCaseString[i]
        if current is ' ':
            answer += current
            pass