def HarmlessRansomNote(noteTxt, magazineTxt):
    noteArray = noteTxt.split()
    magaArray = magazineTxt.split()
    magaObj = {}
    possible = true

    for word in magaArray:
        if magaObj[word] is magaObj[word]:
            magaObj[word] = 0
        else:
            magaObj[word]++
    pass
    