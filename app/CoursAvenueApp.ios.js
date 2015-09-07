'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet
} = React;

var CourseList = require('./components/CourseList');

var CoursAvenueApp = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Cours',
          component: CourseList,
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('CoursAvenueApp', () => CoursAvenueApp);

module.exports = CoursAvenueApp;
