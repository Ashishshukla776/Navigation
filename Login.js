import React,{useState} from 'react';
import { TextInput,View,StyleSheet,Text,Button} from 'react-native';


const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allEntry ,setAllEntry] = useState([]);
    const submitForm=()=>{
        const newEntry={email:email,password:password};
        setAllEntry([...allEntry,newEntry])
    }

    return(
        <View style={Styles.mainContainer} >
        
              <TextInput placeholder='Email'
              value={email}
              onChangeText=
              {(e)=>setEmail(e)}
              style={Styles.userContainer}/>

              <TextInput placeholder='Password'
              value={password}
              onChangeText=
              {(e)=>setPassword(e)}
              style={Styles.userContainer}/>

              <Button title='Login'
              onPress={submitForm}/>
        
              <View >
                  {
                      allEntry.map((curElem)=>{
                          return(
                              <View>
                                  <Text style={Styles.outerText}>{curElem.email}</Text>
                                  <Text style={Styles.outerText}>{curElem.password}</Text>
                              </View>
                          )
                      })
                  }

              </View>
                
        </View>
                
    )
}

export default Login;
const Styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#708090',
      
      
    },
    userContainer:{
        borderRadius:30,
        borderWidth:1,
        borderColor:'black',
        padding:10,
        marginBottom:10,
        marginTop:10,
        fontSize:20,
        width:250,
        height:50
    },
    
    
    outerText:{
        fontSize:50  
    }

   
})