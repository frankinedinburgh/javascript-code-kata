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

    for el in noteArray:
        if magaObj[el]:
            magaObj[el]--
            if magaObj[el] < 0:
                possible = false
        else:
            noteArray[el]++
    pass
    