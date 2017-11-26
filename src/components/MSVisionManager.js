import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: 'e341428ad33f446fa2f77ee8f504975f'
});

class MSVisionManager {

    static callToVisionAPI(visionObject,successCallBack,errorCallBack) {
        const app = new Clarifai.App({
            apiKey: visionObject.API_KEY
        });
        app.models.predict(Clarifai.GENERAL_MODEL, visionObject.API_RESOURCE).then(
            function(response) {
                // do something with response
                //console.log(response)
                let {outputs} = response;
                let {concepts} = outputs[0].data;
                let conceptCollection=[];
                for(const index in concepts){
                    conceptCollection.push(concepts[index].name);
                }


                successCallBack(conceptCollection);
            },
            function(err) {
                // there was an error
               // console.log(err)
                errorCallBack(err);
            }
        );

    }
}


export default MSVisionManager;