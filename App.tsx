import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import Dashboard from './src/components/dashboard';



export default function App() {
  return (
    <View style={styles.container}>
        <View>
        <Pressable style={styles.paymentcontrol}  >
                                   <Text style={styles.text}>Pay</Text>
                         </Pressable>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentcontrol: {
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#E06017',
  },
});
