
export function generateQueryConstructor( query ) {
 // console.log("now in query constrcutor call qeury is")
 //console.log(query);
   // console.log("this is")
    //console.log(this)
    for ( const key in query ) {
      //  console.log(key);
        this[ key ] = query[ key ]
    }
    
}