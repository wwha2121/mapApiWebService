from flask import Flask, render_template, request, jsonify
import gridfs

app = Flask(__name__)

from datetime import datetime

from pymongo import MongoClient
client = MongoClient('mongodb+srv://wwha2121:enemy12!@newland.mxgol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
db = client.newland



@app.route('/')
def home():
    return render_template('index.html')


# @app.route("/upload", methods=['POST'])
# def upload():
#     ## file upload ##
#     img = request.files['image']
#
#     ## GridFs를 통해 파일을 분할하여 DB에 저장하게 된다
#     fs = gridfs.GridFS(db)
#     fs.put(img, filename='name')
#
#     ## file find ##
#     data = client.grid_file.fs.files.find_one({'filename': 'name'})
#
#     ## file download ##
#     my_id = data['_id']
#     outputdata = fs.get(my_id).read()
#     output = open('./images/' + 'back.jpeg', 'wb')
#     output.write(outputdata)
#     return jsonify({'msg': '저장에 성공했습니다.'})



@app.route("/mapMakingHome", methods=["POST"])
def mapMakingHome_post():



    family_receive = request.form['familyInfo_give']

    print(family_receive)

    family_receive = family_receive.split(',')

    print(family_receive)

    lat_receive = request.form['lat_give']
    lng_receive = request.form['lng_give']

    file = request.files["file_give"]
    input_text_receive = request.form['input_text_give']

    extension = file.filename.split('.')[-1]

    today = datetime.now()
    mytime = today.strftime('%Y-%m-%d-%H-%M-%S')


    filename = f'{file.filename}'



    save_to = f'static/{filename}'
    file.save(save_to)
    # print(db.familyDb.find_one({"family": family_receive}))


    if db.familyDb.find_one({'lat' : lat_receive,'lng' : lng_receive}) != None:
        db.familyDb.delete_one({'lat' : lat_receive,'lng' : lng_receive})


    doc = {
        'family': family_receive,
        'lat' : lat_receive,
        'lng' : lng_receive,
        'input_text' : input_text_receive,
        'file': f'{file.filename}'
    }
    db.familyDb.insert_one(doc)



    ## file upload ##
    # files = request.files.getlist('files[]')
    # print(files)
    # ## GridFs를 통해 파일을 분할하여 DB에 저장하게 된다
    # fs = gridfs.GridFS(db)
    # fs.put(img, filename='name')
    #
    # ## file find ##
    # data = client.grid_file.fs.files.find_one({'filename': 'name'})
    #
    # ## file download ##
    # my_id = data['_id']
    # outputdata = fs.get(my_id).read()
    # output = open('./images/' + 'back.jpeg', 'wb')
    # output.write(outputdata)


    return jsonify({'msg': '저장완료!'})

@app.route("/mapMakingHome", methods=["GET"])
def mapMakingHome_get():
    comment_list = list(db.familyDb.find({}, {'_id': False}))
    print(comment_list)
    return jsonify({'familyDb': comment_list})


@app.route("/homework", methods=["POST"])
def homework_post():
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']

    doc = {
        'name': name_receive,
        'comment': comment_receive
    }
    db.guestbookDb.insert_one(doc)

    return jsonify({'msg': '저장완료!'})

@app.route("/homework", methods=["GET"])
def homework_get():
    comment_list = list(db.guestbookDb.find({}, {'_id': False}))
    return jsonify({'guestbookDb': comment_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=8080
            , debug=True)