let initialState={movieInfo:[]}
function FormReducer(state =initialState,action){
    console.log(action)
    console.log(initialState)

    switch(action.type){
        case 'save':
          console.log("save")
        return{...state,movieInfo:action.task}
        

      

        

        


    
        


        default:
        return state

    }
}
export default FormReducer