/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/firebase-messaging-sw.js":
/*!**************************************!*\
  !*** ./src/firebase-messaging-sw.js ***!
  \**************************************/
/***/ (() => {

eval("// Saves a new message containing an image in Firebase.\r\n// This first saves the image in Firebase storage.\r\nasync function saveImageMessage(file) {\r\n    try {\r\n      // 1 - We add a message with a loading icon that will get updated with the shared image.\r\n      const messageRef = await addDoc(collection(getFirestore(), 'messages'), {\r\n        name: getUserName(),\r\n        imageUrl: LOADING_IMAGE_URL,\r\n        profilePicUrl: getProfilePicUrl(),\r\n        timestamp: serverTimestamp()\r\n      });\r\n  \r\n      // 2 - Upload the image to Cloud Storage.\r\n      const filePath = `${getAuth().currentUser.uid}/${messageRef.id}/${file.name}`;\r\n      const newImageRef = ref(getStorage(), filePath);\r\n      const fileSnapshot = await uploadBytesResumable(newImageRef, file);\r\n      \r\n      // 3 - Generate a public URL for the file.\r\n      const publicImageUrl = await getDownloadURL(newImageRef);\r\n  \r\n      // 4 - Update the chat message placeholder with the image's URL.\r\n      await updateDoc(messageRef,{\r\n        imageUrl: publicImageUrl,\r\n        storageUri: fileSnapshot.metadata.fullPath\r\n      });\r\n    } catch (error) {\r\n      console.error('There was an error uploading a file to Cloud Storage:', error);\r\n    }\r\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UtbWVzc2FnaW5nLXN3LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSwwQkFBMEIsMEJBQTBCLEdBQUcsY0FBYyxHQUFHLFVBQVU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyaWVuZGx5Y2hhdC8uL3NyYy9maXJlYmFzZS1tZXNzYWdpbmctc3cuanM/ZTU5OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTYXZlcyBhIG5ldyBtZXNzYWdlIGNvbnRhaW5pbmcgYW4gaW1hZ2UgaW4gRmlyZWJhc2UuXHJcbi8vIFRoaXMgZmlyc3Qgc2F2ZXMgdGhlIGltYWdlIGluIEZpcmViYXNlIHN0b3JhZ2UuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVJbWFnZU1lc3NhZ2UoZmlsZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gMSAtIFdlIGFkZCBhIG1lc3NhZ2Ugd2l0aCBhIGxvYWRpbmcgaWNvbiB0aGF0IHdpbGwgZ2V0IHVwZGF0ZWQgd2l0aCB0aGUgc2hhcmVkIGltYWdlLlxyXG4gICAgICBjb25zdCBtZXNzYWdlUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZ2V0RmlyZXN0b3JlKCksICdtZXNzYWdlcycpLCB7XHJcbiAgICAgICAgbmFtZTogZ2V0VXNlck5hbWUoKSxcclxuICAgICAgICBpbWFnZVVybDogTE9BRElOR19JTUFHRV9VUkwsXHJcbiAgICAgICAgcHJvZmlsZVBpY1VybDogZ2V0UHJvZmlsZVBpY1VybCgpLFxyXG4gICAgICAgIHRpbWVzdGFtcDogc2VydmVyVGltZXN0YW1wKClcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIC8vIDIgLSBVcGxvYWQgdGhlIGltYWdlIHRvIENsb3VkIFN0b3JhZ2UuXHJcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7Z2V0QXV0aCgpLmN1cnJlbnRVc2VyLnVpZH0vJHttZXNzYWdlUmVmLmlkfS8ke2ZpbGUubmFtZX1gO1xyXG4gICAgICBjb25zdCBuZXdJbWFnZVJlZiA9IHJlZihnZXRTdG9yYWdlKCksIGZpbGVQYXRoKTtcclxuICAgICAgY29uc3QgZmlsZVNuYXBzaG90ID0gYXdhaXQgdXBsb2FkQnl0ZXNSZXN1bWFibGUobmV3SW1hZ2VSZWYsIGZpbGUpO1xyXG4gICAgICBcclxuICAgICAgLy8gMyAtIEdlbmVyYXRlIGEgcHVibGljIFVSTCBmb3IgdGhlIGZpbGUuXHJcbiAgICAgIGNvbnN0IHB1YmxpY0ltYWdlVXJsID0gYXdhaXQgZ2V0RG93bmxvYWRVUkwobmV3SW1hZ2VSZWYpO1xyXG4gIFxyXG4gICAgICAvLyA0IC0gVXBkYXRlIHRoZSBjaGF0IG1lc3NhZ2UgcGxhY2Vob2xkZXIgd2l0aCB0aGUgaW1hZ2UncyBVUkwuXHJcbiAgICAgIGF3YWl0IHVwZGF0ZURvYyhtZXNzYWdlUmVmLHtcclxuICAgICAgICBpbWFnZVVybDogcHVibGljSW1hZ2VVcmwsXHJcbiAgICAgICAgc3RvcmFnZVVyaTogZmlsZVNuYXBzaG90Lm1ldGFkYXRhLmZ1bGxQYXRoXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHVwbG9hZGluZyBhIGZpbGUgdG8gQ2xvdWQgU3RvcmFnZTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/firebase-messaging-sw.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/firebase-messaging-sw.js"]();
/******/ 	
/******/ })()
;