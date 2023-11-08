var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _firebase=_interopRequireDefault(require("../database/firebase"));var _jsxFileName="/Users/tuyento/ReactNative/KhoaLuan/todoapp/src/screens/login.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var Login=function(_Component){(0,_inherits2.default)(Login,_Component);var _super=_createSuper(Login);function Login(){var _this;(0,_classCallCheck2.default)(this,Login);_this=_super.call(this);_this.updateInputVal=function(val,prop){var state=_this.state;state[prop]=val;_this.setState(state);};_this.userLogin=function(){if(false){_reactNative.Alert.alert('Tài khoản hoặc mật khẩu không chính xác');}else{_this.setState({isLoading:true});_firebase.default.auth().signInWithEmailAndPassword('admin@gmail.com','123456').then(function(res){console.log(res);console.log('User logged-in successfully!');_this.setState({isLoading:false,email:'',password:''});_this.props.navigation.navigate('Dashboard');}).catch(function(error){_this.setState({errorMessage:error.message});console.log(error);_reactNative.Alert.alert('Tài khoản hoặc mật khẩu không chính xác');});}};_this.state={email:'',password:'',isLoading:false};return _this;}(0,_createClass2.default)(Login,[{key:"render",value:function render(){var _this2=this;if(this.state.isLoading){}return _react.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:69,columnNumber:13}},_react.default.createElement(_reactNative.View,{style:styles.loginViewTitle,__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:17}},_react.default.createElement(_reactNative.Text,{style:styles.loginTextTitle,__source:{fileName:_jsxFileName,lineNumber:71,columnNumber:21}},"\u0110\u0103ng nh\u1EADp")),_react.default.createElement(_reactNative.TextInput,{style:styles.inputStyle,placeholder:"Email",value:this.state.email,onChangeText:function onChangeText(val){return _this2.updateInputVal(val,'email');},__source:{fileName:_jsxFileName,lineNumber:73,columnNumber:17}}),_react.default.createElement(_reactNative.TextInput,{style:styles.inputStyle,placeholder:"Password",value:this.state.password,onChangeText:function onChangeText(val){return _this2.updateInputVal(val,'password');},maxLength:15,secureTextEntry:true,__source:{fileName:_jsxFileName,lineNumber:79,columnNumber:17}}),_react.default.createElement(_reactNative.Button,{color:"#3740FE",title:"\u0110\u0103ng nh\u1EADp",onPress:function onPress(){return _this2.userLogin();},__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:17}}),_react.default.createElement(_reactNative.Text,{style:styles.loginText,onPress:function onPress(){return _this2.props.navigation.navigate('Signup');},__source:{fileName:_jsxFileName,lineNumber:93,columnNumber:17}},"Kh\xF4ng c\xF3 t\xE0i kho\u1EA3n? Nh\u1EA5p v\xE0o \u0111\xE2y \u0111\u1EC3 \u0111\u0103ng k\xFD"));}}]);return Login;}(_react.Component);exports.default=Login;var styles=_reactNative.StyleSheet.create({container:{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',padding:35,backgroundColor:'#fff'},inputStyle:{width:'100%',marginBottom:15,paddingBottom:15,alignSelf:'center',borderColor:'#ccc',borderBottomWidth:1},loginText:{color:'#3740FE',marginTop:25,textAlign:'center'},preloader:{left:0,right:0,top:0,bottom:0,position:'absolute',alignItems:'center',justifyContent:'center',backgroundColor:'#fff'},loginViewTitle:{justifyContent:'center',paddingBottom:60},loginTextTitle:{justifyContent:'center',textAlign:'center',fontSize:30,fontWeight:'bold'}});