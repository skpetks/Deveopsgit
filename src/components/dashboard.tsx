import React, { useState, useContext, useEffect, Fragment, } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native';
import { FlatList, ListRenderItem } from 'react-native'




export default function Dashboard() {


  const datastate = [
    {id: 1, name: "Dharmik" },
    {id: 2, name: "Bhavesh" },
    {id: 3, name: "Piyush" }
];
datastate.push({id: 4, name: "Mehul"});
var payments = [];
    return (

      <View style={styles.container}>
       <View style={styles.row}>
             <View style={styles.col6}>
                  <View style={styles.row}>
                  <View style={styles.col5}>
                                   <View style={styles.row}>
                                   <View style={styles.col5}>
                                      <Text style={{fontSize: 20, textAlign:'left', fontWeight:'bold'}} >easyPos</Text>
                                      </View>
                                      <View style={styles.col5}>
                                      <Text style={{fontSize: 10, textAlign:'right', fontWeight:'bold'}} >POSTS000001</Text>
                                        </View>
                                      </View>
                                </View>
                                <View style={styles.col5}>


                                <View style={styles.row}>
                                   <View style={styles.col5}>
                                <Text style={{fontSize: 10, textAlign:'left', flex:1,fontWeight:'bold'}} >Pending</Text>
                                </View>  <View style={styles.col5}>
                                            <Text style={{fontSize: 14, textAlign:'right', flex:1}} >Guest user</Text>

                                            </View>

                                            </View>
                                </View>
                                            <TextInput
                                            placeholder="Search SKU/UPC/PLU"
                                            style={styles.input} />
                                <View style={styles.rowfull }>
                                  <View style={{backgroundColor:'#F0F0F0',height:'60px',width:'100%',flexDirection:'row',flexWrap:'wrap',alignItems:'center',borderColor:'#000000',       borderWidth: 1}}>
                                  <Text style={{fontSize: 20, textAlign:'left',marginLeft:'10px',flex:1 }} >Item</Text>
                                  <Text style={{fontSize: 20, textAlign:'left', flex:1}} >Price</Text>
                                  <Text style={{fontSize: 20, textAlign:'left', flex:1}} >Qty</Text>
                                  <Text style={{fontSize: 20, textAlign:'left', flex:1}} >Promo</Text>
                                  <Text style={{fontSize: 20, textAlign:'left', flex:1}} >Discount</Text>
                                  <Text style={{fontSize: 20, textAlign:'right',marginRight:'10px', flex:1}} >Total</Text>
                                  </View>
                                  <View style={{backgroundColor:'#F0F0F0',height:'500px',width:'100%',flexDirection:'row',flexWrap:'wrap',alignItems:'center',borderColor:'#000000',       borderWidth: 1}}>
                                  <Text style={{fontSize: 15, textAlign:'center',marginLeft:'10px',flex:1,color:'#E06017' }} >Add Products to cart.</Text>
                                  </View>
                                  <View style={{backgroundColor:'#DEDEDE',height:'60px',width:'100%',flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>
                                  <Text style={{fontSize: 30, textAlign:'left',marginLeft:'10px',flex:1 }} >0</Text>
                                  <Text style={{fontSize: 30, textAlign:'left', flex:1}} >0</Text>
                                  <Text style={{fontSize: 30, textAlign:'left', flex:1}} >0</Text>
                                  <Text style={{fontSize: 30, textAlign:'left', flex:1}} >0</Text>
                                  <Text style={{fontSize: 30, textAlign:'left', flex:1}} >0</Text>
                                  <Text style={{fontSize: 30, textAlign:'left', flex:1}} >0</Text>
                                  <Text style={{fontSize: 30, textAlign:'right',marginRight:'10px', flex:1}} >0</Text>
                                  </View>
                                  <View style={{backgroundColor:'#DEDEDE',height:'30px',width:'100%',flexDirection:'row',flexWrap:'wrap',alignItems:'flex-start'}}>
                                  <Text style={{fontSize: 22, textAlign:'left',marginLeft:'10px',flex:1 }} >Item</Text>
                                  <Text style={{fontSize: 22, textAlign:'left', flex:1}} >Sub-total</Text>
                                  <Text style={{fontSize: 22, textAlign:'left', flex:1}} >Discount</Text>
                                  <Text style={{fontSize: 22, textAlign:'left', flex:1}} >Promo</Text>
                                  <Text style={{fontSize: 22, textAlign:'left', flex:1}} >Sr.Chrg.</Text>
                                  <Text style={{fontSize: 22, textAlign:'left', flex:1}} >Tax</Text>
                                  <Text style={{fontSize: 22, textAlign:'right',marginRight:'10px', flex:1}} >Net Total</Text>
                                  </View>
                                </View>
                 </View>


             </View>





                <View style={styles.col4}>
                <View style={styles.rowfull}>
                          <Pressable style={styles.button}  >
                                   <Text style={styles.text}>New Order</Text>
                         </Pressable>
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Member</Text>
                         </Pressable>

                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Sales Staff</Text>
                         </Pressable>
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Promotion</Text>
                         </Pressable>
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Discount</Text>
                         </Pressable>
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Receipt</Text>
                         </Pressable>
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Open Item</Text>
                         </Pressable>
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Delivery</Text>
                         </Pressable>
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Refund</Text>
                         </Pressable>
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Void</Text>
                         </Pressable>
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>OrderHistory</Text>
                         </Pressable>
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Sync</Text>
                         </Pressable>
              
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Shift</Text>
                         </Pressable>

                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Cash log</Text>
                         </Pressable>
                         <Pressable style={styles.button}  >
                                   <Text style={styles.text}>Cashier Box</Text>
                         </Pressable>
                         <Pressable style={styles.morebutton}  >
                                   <Text style={styles.moretext}>More Function</Text>
                         </Pressable>

                         <View style={styles.rowfull}>

                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>7</Text>
                         </Pressable>
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>8</Text>
                         </Pressable>
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>9</Text>
                         </Pressable>
                        
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>Enter</Text>
                         </Pressable>


                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>4</Text>
                         </Pressable>
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>5</Text>
                         </Pressable>
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>6</Text>
                         </Pressable>
                        
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>Clear</Text>
                         </Pressable>
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>1</Text>
                         </Pressable>
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>2</Text>
                         </Pressable>
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>3</Text>
                         </Pressable>
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>Qty</Text>
                         </Pressable>
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>0</Text>
                         </Pressable>
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>.</Text>
                         </Pressable>
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>del</Text>
                         </Pressable>
                        
                         <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>Pay</Text>
                         </Pressable>
                         </View>
               </View>
</View>
             </View>



             <StatusBar style="auto" />

      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      height:'100%',
      width:'100%',
      justifyContent: 'center',
    },
    row:{
        backgroundColor: '#ffffff' ,
        width:'98%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' 
    },  
    rowfull:{
        backgroundColor: '#ffffff' ,
        width:'100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' ,
        
    },  
    
      col1:{
        backgroundColor: '#ffffff' ,
        width:'10%',
        height:'100%'
    },
    col2:{
        backgroundColor: '#ffffff' ,
        width:'20%',
        height:'100%'
    },
    col3:{
        backgroundColor: '#ffffff' ,
        width:'30%',
        height:'auto'
    },
    col6:{
        backgroundColor: '#ffffff' ,
        width:'60%',
        height:'100%'
    },
    col4:{
        backgroundColor: '#111324' ,
        width:'40%',
        height:'100%'
    },
    col5:{
        backgroundColor: '#ffffff' ,
        width:'50%',
    },
    col8:{
        backgroundColor: '#ffffff' ,
        width:'80%',
        height:'100%'
    },
    input: {
        height: 60,
        margin: 12,
        width:'100%',
        borderWidth: 1,
        borderColor:'#535353',
        padding: 10,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15, 
        fontSize: 16,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 3,
        width:'30%',
        margin:'5px',
        height:'59px',
        backgroundColor: '#E06017',
      },
      morebutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 3,
        width:'93%',
        marginTop:'16px',
        marginLeft:'7.5px',
        marginRight:'10px',
        height:'59px',
        backgroundColor: '#F4F4F4',
        borderColor:'#E06017',
       borderWidth: 1
      },
      moretext: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#E06017',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#ffffff',
      },
      paymentcontrol:{
        backgroundColor: '#5E5E5E',
          height:'80px',
          width:'22%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 8,
          elevation: 3,
          margin:'5px',
        
      }
  });
  