import React from 'react';

class Car {
  setDriveSound(sound) {
    this.sound = sound;
  }

  // this refers to object in front of dot
  drive() {
    console.log(this.sound);
  }
}

class SideBar extends React.Component {
  componentDidMount() {
    const car = new Car();
    car.setDriveSound('vroom');
    console.log(car);
    car.drive();

    const truck = {
      sound: 'putputput',
      driveMyTruck: car.drive,
    };
    truck.driveMyTruck();

    const drive = car.drive;
    // TypeError: Cannot read property 'sound' of undefined
    // drive();
  }

  render() {
    return <div className='ui segment'>This error</div>;
  }
}

export default SideBar;
