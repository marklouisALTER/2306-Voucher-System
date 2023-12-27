import { StyleSheet,Font } from '@react-pdf/renderer';
// Register font
// Font.register({ family: 'Roboto', src: source });
const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      alignItems: 'center',
      // justifyContent: 'center',
      height: '100%',
      // height: 500, // Adjust the height as needed
      padding: 10,
    },
    header: {
      width: '100%',
      height: '10%',
      // padding: 10,
      border: 3,
      borderColor: 'black',
      marginBottom: 2,
      flexDirection:'row',
      justifyContent:'space-between'
      
    },
    subHeader: {
      width: '100%',
      height: '5%',
      padding: 10,
      border: 3,
      borderColor: 'black',
      backgroundColor: '#c0c0c0',
      marginBottom: 2
    },
    body: {
      width: '100%',
      height: '70%',    
      
      
      // backgroundColor: '#c0c0c0'
      marginBottom: 2,
      flexDirection:'row',
    },
    footer: {
      width: '100%',
      height: '20%',
      // padding: 50,
      border: 3,
      borderColor: 'black',      
    },
    borderContainer: {
      width: '100%',
      height: '100%',    
    },
    
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    label: {
      width: 100,
      marginRight: 10,
    },
    value: {
      flex: 1,
      border: 1,
      borderColor: 'black',
      padding: 5,
    },
    content: {
      flex: 1, // Takes up the available space within the border
      padding: 10,
    },
  
    // TEXT
  
    bold: {
      fontSize:8,
      fontWeight: 'bold',
      
    },
    number: {
      fontSize:7,    
      fontWeight: 'bold',
      marginRight:5,
      marginTop:5,
      marginLeft:3,
    },
    normal: {
      fontSize:7,    
    },
    inputText: {
      fontSize:10,
      color:'black',
      zIndex: '10',
      height: 20,
      marginLeft:2,
      marginTop:1,
    },
    inputText1: {
      fontSize:12,
      color:'black',
      zIndex: '10',      
    },
    inputText2: {
      fontSize:12,
      color:'black',
      zIndex: '10',
      marginLeft:5,
      marginTop:2,
      width:15,
      height:20     
    },
    footerText: {
      fontSize:9,
    },
    
  
    // TEMP
    logoContainer: {
      width: 40, // Set the width of the logo container
      height: 40, // Set the height of the logo container      
      borderColor: 'black', // Border color
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  
    // INPUT BOX
      smallInput: {
        position: 'absolute',
        top: 130.6,
        left:206,
        width: 33,
        height: 12,
        // width: 40,
        // height: 20,
        // border: 1,
        // borderColor: 'black',
        backgroundColor: 'white',
      },
      input: {
        width: 60,
        height: 20,
        border: 1,
        borderColor: 'black',
        backgroundColor: 'white',
      },
      
      smallregtangleinput: {
        width: '50%',
        height: 20,
        border: 1,
        borderColor: 'black',
        backgroundColor: 'white',
      },
      regtangleinput: {
        width: '100%',
        height: 20,
        border: 1,
        borderColor: 'black',
        backgroundColor: 'white',
      },
      rectanglebox: {
        width: '100%',
        height: '50%',    
        position: 'relative',
        backgroundColor: 'white',
      },
      box: {
        width: '100%',
        height: '100%',    
        position: 'relative',
        backgroundColor: 'white',
      },
      atcbox: {
        width: '100%',
        height: '100%',    
        position: 'relative',
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center'
      },
      lineContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      vline: {
        width: 0.5,
        height: 5, // Adjust the height of each line
        backgroundColor: 'black',
        marginTop:22,
        
      },
      transparentLine: {
        opacity: 0, // Make the first and last lines not visible
      },
  
      // SIGNATURE
  
      signatureArea: {
        width: '100%',
        height: '100%',      
        position: 'relative',
      },
      line: {
        width: '80%',
        height: 2,
        backgroundColor: 'black',
      
      
      },
      signatureLabel: {
        textAlign: 'center',
        marginTop: 5,
        fontSize:7,
        marginRight:40,
      },
      signatureText: {
        marginBottom: 7,
        // marginLeft:20,
        marginHorizontal:20,
        fontSize:10,        
      },

      signatureImage: {        
        position: 'absolute',
        bottom: -10,
        left: 50,
        // marginLeft:50,       
        width: '50%',
        height: '30px',
      },
      
});
export default styles;