let names = [ 'Rafael', 'Cris', 'Carol', 'João','Roberta']
names.unshift("Luck")

    console.log(names)
names.pop()

    console.log(names)
names.splice(5,2 ,"Liza","Duda")
    names.shift()
 
    console.log(names)

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,b){
    return a-b
})

    console.log(numbers)