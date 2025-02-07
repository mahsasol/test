
    // string methods 
    var txt = "abcdefghijklmno"
    console.log('length: ', txt.length)

    var test = "mahsa sina"
    console.log('slice: ', test.slice(6, 9))

    var testmines = "mahsa sina"
    console.log('slice -: ', testmines.slice(-4, -1))

    var upcase = "mahsa & sina"
    console.log('Uppercase :', upcase.toUpperCase())

    var lowcase = "SOLEIMANZADE , GHORBANPOUR"
    console.log('LowerCase ', lowcase.toLowerCase())

    var txt1 = "mahsa "
    var txt2 = "sol"
    console.log('concat :', txt1.concat(txt2))

    // numbers methods 

    var tabdil = 22
    console.log(typeof (tabdil))
    console.log('to string:', typeof (tabdil.toString()))

    // toFixed:() 0 to 100 
    var x = 9.656
    console.log('toFixed:()', x.toFixed())
    console.log('toFixed:(0)', x.toFixed(0))
    console.log('toFixed:(2)', x.toFixed(2))
    console.log('toFixed:(4)', x.toFixed(4))

    // toPrecision:() 1 to 100 
    var y = 9.656
    console.log('toPrecision:()', y.toPrecision())
    console.log('toPrecision:(2)', y.toPrecision(2))
    console.log('toPrecision:(4)', y.toPrecision(4))

    // converting
    // number()

    console.log('number true :', Number(true))
    console.log('number false :', Number(false))

    console.log('number :', Number("10"))
    console.log('number :', Number("10.33"))
    console.log('number :', Number("10 33"))
    console.log('number :', Number("john"))



    // arayeha 
    // sort 

    var array = ['mohammad', 'salar', 'ali', 'mary', 'soren']

    console.log(array)

    array.sort()
    console.log(array);

    // reverse 
    var array1 = ['mohammad', 'salar', 'ali', 'mary', 'soren']
    array1.reverse()
    console.log(array1)


    // sort kamtarin-bishtarin 
    // suudi - az kamtarin 
    var array3 = ['30', '14', '60', '45', '81']
    array3.sort(function (a, b) {
        return a - b
    })

    console.log(array3)
    console.log(array3[0])


    // nuzuli az bishtarin 
    var array4 = ['30', '14', '60', '45', '81']
    array4.sort(function (a, b) {
        return b - a
    })


    console.log(array4)
    console.log(array4[0])

    // foreach , map 

    // forEach
    var array = ['soli', 2, 'mary', 4]
    var for1 = array.forEach(function (value, index, array) {
        // return value
        console.log('foreach', value)
    })
    //    map 
    var array2 = ['soli', 2, 'mary', 4]
    var for2 = array2.map(function (value, index, array) {
        return  value

    })
    console.log('map:' , for2)

    // -every () 
    var arrayevery =[2,15,4,25]
    var result

    result  = arrayevery.every(function(value , index){
        return value > 16

    })
    console.log(result)

     // -some () 
     var arrayevery =[2,15,4,25]
    var result

    result  = arrayevery.some(function(value , index){
        return value > 16

    })
    console.log(result)


    // find and findindex 
    // find()
    var array =[1,3,44,64,24]
    var result

    result = array.find(function(value){
        return value > 4
    })
    console.log(result)

    // findindex()
    var array =[1,3,44,64,24]
    var result

    result = array.findIndex(function(value){
        return value > 4
    })
    console.log(result)