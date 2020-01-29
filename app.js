const fs = require('fs')
const archiver = require('archiver');

const bturModel = '../izzacopy/models/btur-model.js'
const dsr1Model = '../izzacopy/models/dsr1-model.js'
const hd9813Model = '../izzacopy/models/hd9813-model.js'
const pmx1Model = '../izzacopy/models/pmx1-model.js'
const rgbModel = '../izzacopy/models/rgb-model.js'
const sourceUnitModel = '../izzacopy/models/source-unit-model.js'

const bturModelTests = '../izzacopy/models/__tests__/btur-model-test.js'
const dsr1ModelTests = '../izzacopy/models/__tests__/dsr1-model-test.js'
const hd9813ModelTests = '../izzacopy/models/__tests__/hd9813-model-test.js'
const pmx1ModelTests = '../izzacopy/models/__tests__/pmx1-model-test.js'
const rgbModelTests = '../izzacopy/models/__tests__/rgb-model-test.js'
const sourceUnitModelTests = '../izzacopy/models/__tests__/source-unit-model-test.js'

const pmx1Actions = '../izzacopy/redux/actions/pmx1-actions.js'
const rgbActions = '../izzacopy/redux/actions/rgb-actions.js'

const rgbProtocolTests = '../izzacopy/redux/api/protocols/__tests__/rgb-protocol-test.js'
const rgbProtocol = '../izzacopy/redux/api/protocols/rgb-protocol.js'

const pmx1Reducer = '../izzacopy/redux/reducers/pmx1-reducer.js'
const rgbReducer = '../izzacopy/redux/reducers/rgb-reducer.js'
const pmx1ReducerTest = '../izzacopy/redux/reducers/__tests__/pmx1-reducer-test.js'
const rgbReducerTest = '../izzacopy/redux/reducers/__tests__/rgb-reducer-test.js'

const pmx1Saga = '../izzacopy/redux/sagas/pmx1-saga.js'
const rgbSaga = '../izzacopy/redux/sagas/rgb-saga.js'
const pmx1SagaTests = '../izzacopy/redux/sagas/__tests__/pmx1-saga-test.js'
const rgbSagaTests = '../izzacopy/redux/sagas/__tests__/rgb-saga-test.js'

const pmx1Selector = '../izzacopy/redux/selectors/pmx1-selectors.js'
const rgbSelector = '../izzacopy/redux/selectors/rgb-selectors.js'
const pmx1SelectorTests = '../izzacopy/redux/selectors/__tests__/pmx1-selector-test.js'
const rgbSelectorTests = '../izzacopy/redux/selectors/__tests__/rgb-selector-test.js'

const rflinkPowerMessages = '../izzacopy/redux/api/protocols/rflink-messages/rflink-power-message.js'
const rflinkZoneStatusMessages = '../izzacopy/redux/api/protocols/rflink-messages/rflink-zone-status-message.js'
const rflinkLibraryDataFileMessage = '../izzacopy/redux/api/protocols/rflink-messages/rflink-library-data-file-message.js'

const rflinkPowerMessagesTests = '../izzacopy/redux/api/protocols/rflink-messages/__tests__/rflink-power-message-test.js'
const rflinkZoneStatusMessageTests = '../izzacopy/redux/api/protocols/rflink-messages/__tests__/rflink-zone-status-message-test.js'
const rflinkLibraryDataFileMessageTests = '../izzacopy/redux/api/protocols/rflink-messages/__tests__/rflink-library-data-file-message-test.js'

//path for api/protocols/index
const protocolsIndexPath = '../izzacopy/redux/api/protocols/index.js'

const RFLinkPowerMessageImport = 'RFLinkPowerMessage'
const RFLinkZoneStatusMessageImport = 'RFLinkZoneStatusMessage'
const RFLinkLibraryDataFileMessageImport = 'RFLinkLibraryDataFileMessage'

// path for pmx1 actions in rflink-saga
const handlePmx1RespoonsePath = '../izzacopy/redux/sagas/rflink-saga.js' 
const handlePmx1RespoonseImport = 'handlePmx1Respoonse'

// path to device reducer
const deviceReducerpath = '../izzacopy/redux/reducers/device-reducer.js'

const pmx1ReducerImport = 'pmx1Reducer'
const rgbReducerImport = 'rgbReducer'

// path to device-model
const deviceModelPath = '../izzacopy/models/device-model.js'

const pmx1ModelImport1 = 'PMX1Settings'
const pmx1ModelImport2 = 'initPMX1Settings'

const rgbModelImport1 = 'RGBSettings'
const rgbModelImport2 = 'initRGBSettings'

const bturModelImport1 = 'BTURSettings'
const bturModelImport2 = 'initBTURSettings'

const dsr1ModelImport1 = 'DSR1Settings'
const dsr1ModelImport2 = 'initDSR1Settings'

const hd9813ModelImport1 = 'HD9813Settings'
const hd9813ModelImport2 = 'initHD9831Settings'

// path to main index.js
const mainIndex = '../izzacopy/index.js'

const newData = require('./shuffle.js')

// path to device reducer
const deviceReducerPath = '../izzacopy/redux/reducers/device-reducer.js'

const pmx1ReducerFunction = 'pmx1Reducer'
const rgbReducerFunction = 'rgbReducer'



// rflinkPowerMessages?
// rflinkZoneStatus?
// rflink-library-data-file-message?
// tests for those

// 1. rm power from api/protocols/index
// 2. rm zone-status from api/protocols/index
// 3. rm data-library from api/protocols/index
// 4. rm import of pmx1 actions from rflink-saga // maybe more? 
// 5. rm import of pmx1 reducer from device-reducer
// 6. rm import of rgb reducer from device-reducer
// 7. rm import of pmx1-model from  device-model
// 8. rm import of rgb-model from  device-model
// 9. rm import of btur-model from  device-model
// 10. rm import of dsr1-model from  device-model
// 11. rm import of hd9813-model from  device-model
// 12. rm import of pmx1-actions from main index.js 
// 13. rm import of rgb-actions from main index.js
// 14. rm import of pmx1-selectors from main index.js
// 15. rm import of rgb-selectors from main index.js
// 16. rm import of pmx1-saga from main index.js
// 17. rm import of rgb-saga from main index.js
// 18. rm pmx1Reducer from device-reducer.js function
// 19. rm rgbReducer from device-reducer.js function

const listToDelete = [bturModel, dsr1Model, hd9813Model, pmx1Model, rgbModel, sourceUnitModel, bturModelTests,
    dsr1ModelTests, hd9813ModelTests, pmx1ModelTests, rgbModelTests, sourceUnitModelTests,
    pmx1Actions, rgbActions, rgbProtocolTests, rgbProtocol, pmx1Reducer, rgbReducer, pmx1ReducerTest, 
    rgbReducerTest, pmx1Saga, rgbSaga, pmx1SagaTests, rgbSagaTests, pmx1Selector, rgbSelector,
    pmx1SelectorTests, rgbSelectorTests, rflinkPowerMessages, rflinkZoneStatusMessages, 
    rflinkLibraryDataFileMessage, rflinkPowerMessagesTests, rflinkZoneStatusMessageTests, rflinkLibraryDataFileMessageTests
]

listToDelete.map(item => {
    fs.unlink(item, (err) => {
      if (err) {
        console.error('error', err)
        return
      }
      console.log('File removed')
    })
})

fs.readFile(protocolsIndexPath, {encoding: 'utf-8'}, function(err, data) {
    if (err) throw error;

    let dataArray = data.split('\n'); // convert file data in an array
    const searchKeyword = RFLinkPowerMessageImport; // we are looking for a line, contains, key word 'user1' in the file
    let lastIndex = -1; // let say, we have not found the keyword

    for (let index=0; index<dataArray.length; index++) {
        if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
            lastIndex = index; // found a line includes a 'user1' keyword
            break; 
        }
    }

    dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array

    // UPDATE FILE WITH NEW DATA
    // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
    // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
    const updatedData = dataArray.join('\n');
    fs.writeFile(protocolsIndexPath, updatedData, (err) => {
        if (err) throw err;
        console.log ('Successfully updated the file data');
    });

});

setTimeout(() => {
    fs.readFile(protocolsIndexPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = RFLinkZoneStatusMessageImport; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(protocolsIndexPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    
    });
}, 1000);

setTimeout(() => {
    fs.readFile(protocolsIndexPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = RFLinkLibraryDataFileMessageImport; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(protocolsIndexPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    
    });
}, 2000);

setTimeout(() => {
    fs.readFile(handlePmx1RespoonsePath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = handlePmx1RespoonseImport; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(handlePmx1RespoonsePath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    
    });
}, 3000);

setTimeout(() => {
    fs.readFile(deviceReducerpath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = pmx1ReducerImport; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceReducerpath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    
    });
}, 4000);

setTimeout(() => {
    fs.readFile(deviceReducerpath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = rgbReducerImport; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceReducerpath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    
    });
}, 5000);

setTimeout(() => {
    fs.readFile(deviceModelPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = pmx1ModelImport1; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceModelPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    
    });
}, 6000);

setTimeout(() => {
    fs.readFile(deviceModelPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = pmx1ModelImport2; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceModelPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    
    });
}, 7000);

setTimeout(() => {
    fs.readFile(deviceModelPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = rgbModelImport1; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceModelPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    })
}, 8000);

setTimeout(() => {
    fs.readFile(deviceModelPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = rgbModelImport2; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceModelPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    })
}, 9000);

setTimeout(() => {
    fs.readFile(deviceModelPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = bturModelImport1; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceModelPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    })
}, 10000);

setTimeout(() => {
    fs.readFile(deviceModelPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = bturModelImport2; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceModelPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    })
}, 11000);

setTimeout(() => {
    fs.readFile(deviceModelPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = dsr1ModelImport1; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceModelPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    })
}, 12000);

setTimeout(() => {
    fs.readFile(deviceModelPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = dsr1ModelImport2; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceModelPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    })
}, 13000);

setTimeout(() => {
    fs.readFile(deviceModelPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = hd9813ModelImport1; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceModelPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    })
}, 14000);

setTimeout(() => {
    fs.readFile(deviceModelPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = hd9813ModelImport2; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceModelPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    })
}, 15000);

setTimeout(() => {
    fs.readFile(mainIndex, {encoding: 'utf-8'}, function(err, data) {
        fs.writeFile(mainIndex, newData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    
    })
}, 16000);


setTimeout(() => {
    fs.readFile(deviceReducerPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = pmx1ReducerFunction; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceReducerPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    })
}, 17000);

setTimeout(() => {
    fs.readFile(deviceReducerPath, {encoding: 'utf-8'}, function(err, data) {
        if (err) throw error;
    
        let dataArray = data.split('\n'); // convert file data in an array
        const searchKeyword = rgbReducerFunction; // we are looking for a line, contains, key word 'user1' in the file
        let lastIndex = -1; // let say, we have not found the keyword
    
        for (let index=0; index<dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                lastIndex = index; // found a line includes a 'user1' keyword
                break; 
            }
        }
    
        dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
    
        // UPDATE FILE WITH NEW DATA
        // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
        // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
        const updatedData = dataArray.join('\n');
        fs.writeFile(deviceReducerPath, updatedData, (err) => {
            if (err) throw err;
            console.log ('Successfully updated the file data');
        });
    })
}, 18000);

setTimeout(() => {
    const archive = archiver('zip', { zlib: { level: 9 }});
    const stream = fs.createWriteStream('../strippedRflinkLibrary.zip');

    archive
    .directory('../izzacopy', 'rflink-ble-api')
    .on('error', err => reject(err))
    .pipe(stream)
  ;

  archive.finalize()
}, 20000);