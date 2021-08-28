let initialState={movieInfo:[]}
function FormReducer(state =initialState,action){
    console.log(action)
    console.log(initialState.movieInfo)

    switch(action.type){
        case 'save':
          console.log("save")
        return{...state,movieInfo:action.movieInfo}
        

      

        

        


    
        


        default:
        return state

    }
}
export default FormReducer