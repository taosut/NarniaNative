import { StyleSheet, Dimensions } from 'react-native';

export const socialFeedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  tabViewContainer: {
    flex: 12,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: '#ff9554',
  },
  label: {
    color: 'black',
    fontWeight: '400',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

/*PROFILE SCREEN*/
export const profileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f5',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  scrollContainer: {
    flex: 12,
  },
  backBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  textContainer: {
    flex: 4,
    alignItems: 'center',
  },
  emptySpace: {
    flex: 1
  },
  whitebg: {
    backgroundColor: '#fff',
  },
});

export const profileStatsStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
  },
  thumbnailContainer: {
    flex: 3,
    paddingTop: 20,
    paddingBottom: 20,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  statsContainer: {
    flex: 1, 
    flexDirection: 'row',
    paddingBottom: 20,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'space-between',
    justifyContent: 'space-around',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const profileMenuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  scrollContainer: {
    paddingTop: 20,
    flex: 12,
  },
  backBtn: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#ff9554'
  },
  textContainer: {
    flex: 4,
    alignItems: 'center',
  }
});

export const profileGalleryStyles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  imgLarge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    marginTop: 1,
    borderWidth: 1,
    borderColor: '#f9f7f5',
  },
  imgSmall: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    borderWidth: 1,
    borderColor: '#f9f7f5',
  },
});

/*Likes Screen*/
export const likesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f9f7f5'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  gallery: {
    flex: 12,
  },
  backBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  emptySpace: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#ff9554'
  },
  textContainer: {
    flex: 4,
    alignItems: 'center',
  },
  noPostsContainer: {
    alignItems: 'center', 
    marginTop: 5
  },
  noPostsText: {
    color: '#888', 
    fontSize: 16
  }
});

export const likesGalleryStyles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  imgLarge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    marginTop: 1,
    borderWidth: 1,
    borderColor: '#f9f7f5',
  },
  imgSmall: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    borderWidth: 1,
    borderColor: '#f9f7f5',
  },
});

export const wardrobeScreen = StyleSheet.create({
  defaults: {
    color: '#ff9554'
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f7f5',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  textContainer: {
    flex: 3,
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  gallery: {
    flex: 12,
  },
  backBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#ff9554'
  },
  thumbnail: {
    height: 150,
    width: 150,
  },
  imgLarge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    marginTop: 1,
    borderWidth: 1,
    borderColor: '#f9f7f5',
  },
  imgSmall: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    borderWidth: 1,
    borderColor: '#f9f7f5',
  },
  emptySpace: {
    flex: 1
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    paddingTop: 10
  }
});

export const tagsModal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  header: {
    flex: 1, 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  textContainer: {
    flex: 3,
    alignItems: 'center',
  },
  imgContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  buttonContainer: {
    flex: 1, 
    alignItems: 'flex-end'
  },
  closeBtn: {
    paddingRight: 15,
  },
  gallery: {
    flex: 12,
    backgroundColor: '#f9f7f5'
  },
  tagHeader: {
    color: '#ff9554',
    fontSize: 24,
    fontWeight: 'bold'
  },
  outfitContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgOutfitContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    backgroundColor: '#fff'
  },
  imgSmall: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    borderWidth: 1,
    borderColor: '#f9f7f5',
  },
  imgLarge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    borderWidth: 1,
    borderColor: '#f9f7f5',
  },
  emptySpace: {
    flex: 1,
  },
});

export const searchTagsResults = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  countStyle: {
    fontSize: 14,
    paddingLeft: 10,
    color: '#888'
  },
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  thumbnail: {
    marginLeft: 10,
  },
  tagFont: {
    color: '#ff9554', 
    fontSize: 36
  }
});

export const searchTags = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  container: {
    flex: 1,
  },
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  thumbnail: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export const commentsModal = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  textInputContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
  },
  commentsContainer: {
    flex: 8,
  },
  buttonContainer: {
    flex: 1, 
    alignItems: 'flex-end'
  },
  emptyContainer: {
    alignItems: 'center'
  },
  emptyText: {
    color: '#888'
  }
});

export const searchShopGallery = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  container: {
    flex: 1,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  imgLarge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    borderWidth: 1,
    borderColor: '#f9f7f5',
  },
  imgSmall: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    borderWidth: 1,
    borderColor: '#f9f7f5',
  },
});

export const searchPeople = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  container: {
    flex: 1,
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  thumbnail: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export const searchPeopleResult = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  container: {
    flex: 1,
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  thumbnail: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export const searchScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  tabViewContainer: {
    flex: 11,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  searchBar: {
    flex: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchBtnContainer: {
    alignItems: 'center'
  },
  searchBtn: {
    flex: 1
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: '#ff9554',
  },
  label: {
    color: 'black',
    fontWeight: '400',
  },
  backBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  emptySpace: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#ff9554'
  },
  textContainer: {
    flex: 4,
    alignItems: 'center',
  }
});

export const searchShop = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  container: {
    flex: 1,
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  thumbnail: {
    left: 50,
    height: 125,
    width: 125,
    borderRadius: 25,
  },
  activityIndicator: {
    width: 0,
    height: 0
  },
  activityIndicatorContainer: {
    flex: 0.5, 
    alignItems: 'center', 
    marginTop: (Dimensions.get('window').height / -2)
  }
});

export const cameraScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f5',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  backBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#ff9554',
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#ff9554'
  },
  textContainer: {
    flex: 4,
    alignItems: 'center',
  },
  img: {
    flex: 2,
  }
});

export const userUploadModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 20, 
    paddingLeft: 5,
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    height: 15,
    color: '#ff9554',
  },
  selector: {
    flex: 1,
  },
  descriptionText: {
    height: 15,
    color: '#ff9554',
    flex: 4,
  },
  form: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    flexWrap: 'wrap',
    overflow: 'hidden',
    margin: 5,
    height: 40,
    width: Dimensions.get('window').width,
  },
  pickerView: {
    flex: 2,
    width: Dimensions.get('window').width,
    height: 40,
  },
  picker: {
    flex: 2,
    padding: 10, 
    margin: 10,    
  },
  loading: {
    flex: 0.5, 
    alignItems: 'center', 
    marginTop: Dimensions.get('window').height / -2,
  },
  activityIndicator: {
    width: 0,
    height: 0,
  },
  button: {
    color: '#ff9554',
  },
});

export const mixerStyles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  emptySpace: {
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#ff9554',
  },
  textContainer: {
    flex: 4,
    alignItems: 'center',
  },
  tuserContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
  },
  muserContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buserContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    left: 50,
    height: 125,
    width: 125,
    borderRadius: 25,
  },
  imgSmall: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
    height: 200,
    borderWidth: 1,
    borderColor: '#fff',
  },
  chevron: {
    width: Dimensions.get('window').width / 4,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'space-around',
    elevation: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  descriptionBar: {
    flex: 1,
    flexDirection: 'row',
  },
  post: {
    flex: 1,
    flexDirection: 'row',
  },
  thumbnail: {
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').width / 5,
    // marginTop: 1,
    borderWidth: 1,
    borderColor: '#f9f7f5',
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  emptyWardrobe: {
    alignItems: 'center',
    marginLeft: 5,
  },
  emptyWardrobeText: {
    color: '#888',
  },
});

export const clothingModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  textcontainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    color: '#ff9554',
  },
  imgSmall: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
  imgLarge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    borderWidth: 1,
    borderColor: '#fff',
  },
  closeBtn: {
    paddingTop: 10,
  }
});
