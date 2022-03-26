from flask import Flask, render_template, request, jsonify


app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://wwha2121:enemy12!@newland.mxgol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
db = client.newland

@app.route('/')
def home():
    return render_template('index.html')




@app.route("/mapMakingHome", methods=["POST"])
def mapMakingHome_post():
    family1_receive = request.form['family1_give']
    family2_receive = request.form['family2_give']
    family3_receive = request.form['family3_give']
    family4_receive = request.form['family4_give']

    doc = {
        'family1': family1_receive,
        'family2': family2_receive,
        'family3': family3_receive,
        'family4': family4_receive
    }
    db.guestbookDb.insert_one(doc)



@app.route("/mapMakingHome", methods=["GET"])
def mapMakingHome_get():
    print("d")



@app.route("/homework", methods=["POST"])
def homework_post():
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']

    doc = {
        'name': name_receive,
        'comment': comment_receive
    }
    db.familyDb.insert_one(doc)

    return jsonify({'msg': '저장완료!'})

@app.route("/homework", methods=["GET"])
def homework_get():
    comment_list = list(db.guestbookDb.find({}, {'_id': False}))
    return jsonify({'guestbookDb': comment_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=8080, debug=True)