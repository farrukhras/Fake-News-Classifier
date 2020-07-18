from flask import Flask, request, jsonify
from fastai.basic_train import load_learner
from fastai.vision import open_image
from flask_cors import CORS,cross_origin
app = Flask(__name__)
CORS(app, support_credentials=True)

# load the learner
learn = load_learner(path='./models', file='export.pkl')
classes = learn.data.classes


def predict_single(input_text):
    'function to take image and return prediction'
    prediction = learn.predict(input_text)
    probs_list = prediction[2].numpy()
    return {
        'category': classes[prediction[1].item()],
        'probs': {c: round(float(probs_list[i]), 5) for (i, c) in enumerate(classes)}
    }


route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    print(request)
    # return jsonify(predict_single(request.files['image']))

if __name__ == '__main__':
    app.run()