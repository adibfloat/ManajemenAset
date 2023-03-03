import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Home = ({navigation, route}) => {
  // const email = route.params.email;
  // console.log(email);
  return (
    <View style={Styles.page}>
      <Text> Halaman Home </Text>
      <Text style={{color: 'black'}}>{/* {email}  */}</Text>
      <View style={Styles.wrapperButton}>
        <TouchableOpacity
          style={Styles.btnTambah}
          onPress={() => navigation.navigate('PostData')}
          // onPress={() => this.props.navigation.navigate('PostData')}
        >
          <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.btnTambah}
          onPress={() => navigation.navigate('ReadData')}
          // onPress={() => this.props.navigation.navigate('PostData')}
        >
          <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

// export class Home extends Component {
//   render() {
//     return (
//       <View style={Styles.page}>
//         <Text> Halaman Home </Text>
//         <View style={Styles.wrapperButton}>
//           <TouchableOpacity
//             style={Styles.btnTambah}
//             onPress={() => this.props.navigation.navigate('TambahKontak')}>
//             <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

const Styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    //Bayangan
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
