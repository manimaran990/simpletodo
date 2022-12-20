from flask import Flask

app = Flask(__name__)

todos = [
    {'id': 1, 'text': 'Learn Flask'},
    {'id': 2, 'text': 'Learn React'},
]

@app.route('/todos')
def get_todos():
    return {'todos': todos}

if __name__ == '__main__':
    app.run()