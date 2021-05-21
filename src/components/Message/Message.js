import './Message.css';
import message_logo from "./message_icon.svg"


function Message() {
  //real-time data update
  var date = [
    {
    time:"13:02, 01/22/2021",
    who:"user 1",
  },
  {
  time:"13:02, 01/22/2021",
  who:"user 1",
  },{
  time:"13:02, 01/22/2021",
  who:"user 1",
  },{
  time:"13:02, 01/22/2021",
  who:"user 1",
  },{
    time:"13:02, 01/22/2021",
    who:"user 1",
  },
  {
  time:"13:02, 01/22/2021",
  who:"user 1",
  },{
  time:"13:02, 01/22/2021",
  who:"user 1",
  },{
  time:"13:02, 01/22/2021",
  who:"user 1",
  }
];
  var item = [];
  for(var i = 0; i< date.length; i++){
     item.push(<div className="Message_text">{date[i].time}&emsp;&emsp;{date[i].who} has been updated data.</div>);
  }

  //Message
    var message_info = [
      {
        time:"now",
        who:"Joe Bryan",
        description:"Please come to my office right now",
      },
      {
        time:"yesterday",
        who:"Dannon Lebron",
        description:"Let's handout affter work",
      },
    ];
    var message_info_temp = [];
    for(var i = 0; i< message_info.length; i++){
       message_info_temp.push(
         <div className="Message_box_item">
          <div className="Message_box_item_1">
            <img src={message_logo} className="logo"/>
            <h2>Message</h2>
            <a>&nbsp;·&nbsp;{message_info[i].time}</a>
          </div>
          <div className="Message_box_item_2">
            {message_info[i].who}
          </div>
          <div className="Message_box_item_3">
            {message_info[i].description}
          </div>
         </div>

       );
    }


  console.log("check item: " + item[0]);
  return (
    <div className="Message">
      <div className="Message_box1">
         <h1>Real-time data update</h1>
         {item}
      </div>
      <div className="Message_box2">
        <h1>Message</h1>
        {message_info_temp}
      </div>
    </div>
  );
}

export default Message;
