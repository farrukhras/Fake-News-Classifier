from flask import Flask, request, jsonify
from fastai.basic_train import load_learner
from fastai.vision import open_image
from flask_cors import CORS,cross_origin
app = Flask(__name__)
CORS(app, support_credentials=True)

# load the learner
learn = load_learner(path='./models', file='export.pkl')
classes = learn.data.classes

# route for prediction
@app.route('/', methods=['POST'])
def predict():
    req_data = request.get_json() # format : {'text': 'some corona related news'}
    text = req_data['text']
    text = 'WASHINGTON (Reuters) - ' + text
    pred_class, pred_idx, outputs = learn.predict(text)
    if pred_class.obj == 1:
        return "False"
    else:
        return "True"

# http://127.0.0.1:5000/
if __name__ == '__main__':
    app.run(threaded=True)
