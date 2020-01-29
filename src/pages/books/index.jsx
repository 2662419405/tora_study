import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { AtButton, AtCard } from "taro-ui";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "书籍"
  };
  constructor(props) {
    super(props);
    this.state = {
      todos: ["吃饭", "睡觉", "开电视"]
    };
  }
  render() {
    return (
      <View>
        {this.state.todos.map(v => {
          return <View>{v}</View>;
        })}
        <Button>点击我</Button>
        <AtButton type="primary" size="small">
          taro-ui
        </AtButton>
        <AtCard
          note="小Tips"
          extra="额外信息"
          title="这是个标题"
        //   thumb="http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
        >
          这也是内容区 可以随意定义功能
        </AtCard>
      </View>
    );
  }
}
