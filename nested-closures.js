function TopObject() {
    var _topPrivate = "I'm at the top!";

    function MidObject() {
        var _midPrivate = "I'm in the middle.";

        return {
            midPrivileged: function() {
                console.log(_midPrivate);
                console.log(_topPrivate);
            }
        }
    }

    return {
//        bottomObjectPrivileged: BottomObject,
        midObjectPrivileged: MidObject,
        topPrivileged: function() {
            console.log(_topPrivate);
        }
    }
}

var top_object = new TopObject();
top_object.topPrivileged();

var mid_object = top_object.midObjectPrivileged();
mid_object.midPrivileged();
