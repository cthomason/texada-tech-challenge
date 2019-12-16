// Fake HTTP server to provide us with data

export default class HttpMock {
  data = [
    {
      id: 1,
      description: "Cesna 120",
      timestamp: "2016-10-12T12:00:00-05:00",
      longitude: 43.2583264,
      latitude: -81.8149807,
      elevation: 500
    },
    {
      id: 1,
      description: "Cesna 120",
      timestamp: "2016-10-13T12:00:00-05:00",
      longitude: 42.559112,
      latitude: -79.286693,
      elevation: 550
    },
    {
      id: 1,
      description: "Cesna 120",
      timestamp: "2016-10-14T12:00:00-05:00",
      longitude: 43.559112,
      latitude: -85.286693,
      elevation: 600
    },
    {
      id: 1,
      description: "Cesna 120",
      timestamp: "2016-10-15T12:00:00-05:00",
      longitude: 42.3119735,
      latitude: -83.0941179,
      elevation: 650
    },
    {
      id: 2,
      description: "DC-6 Twin Otter",
      timestamp: "2016-10-12T12:00:00-05:00",
      longitude: 43.459112,
      latitude: -80.386693,
      elevation: 500
    },
    {
      id: 2,
      description: "DC-6 Twin Otter",
      timestamp: "2016-10-13T12:00:00-05:00",
      longitude: 42.459112,
      latitude: -79.386693,
      elevation: 550
    },
    {
      id: 2,
      description: "DC-6 Twin Otter",
      timestamp: "2016-10-14T12:00:00-05:00",
      longitude: 43.459112,
      latitude: -85.386693,
      elevation: 450
    },
    {
      id: 2,
      description: "DC-6 Twin Otter",
      timestamp: "2016-10-15T12:00:00-05:00",
      longitude: 44.459112,
      latitude: -81.386693,
      elevation: 400
    },
    {
      id: 3,
      description: "Piper M600",
      timestamp: "2016-10-15T12:00:00-05: 00",
      longitude: 44.459112,
      latitude: -81.386693,
      elevation: 500
    },
    {
      id: 3,
      description: "Piper M600",
      timestamp: "2016-10-15T12:00:00-05:00",
      longitude: 45.459112,
      latitude: -82.386693,
      elevation: 600
    },
    {
      id: 3,
      description: "Piper M600",
      timestamp: "2016-10-15T12:00:00-05:00",
      longitude: 46.459112,
      latitude: -83.386693,
      elevation: 700
    },
    {
      id: 3,
      description: "Piper M600",
      timestamp: "2016-10-15T12:00:00-05:00",
      longitude: 47.459112,
      latitude: -84.386693,
      elevation: 800
    },
    {
      id: 3,
      description: "Piper M600",
      timestamp: "2016-10-15T12:00:00-05:00",
      longitude: 48.459112,
      latitude: -85.386693,
      elevation: 900
    },
    {
      id: 4,
      description: "Art Boom 6500",
      timestamp: "2017-08-04T14:20:38-05:00",
      longitude: 43.7634618,
      latitude: -79.3688191,
      elevation: 800
    },
    {
      id: 4,
      description: "Art Boom 6500",
      timestamp: "2017-08-04T16:20:38-05:00",
      longitude: 43.8001468,
      latitude: -79.2342365,
      elevation: 400
    },
    {
      id: 4,
      description: "Art Boom 6500",
      timestamp: "2017-08-04T14:20:38-05:00",
      longitude: 44.51165,
      latitude: -80.1239422,
      elevation: 550
    },
    {
      id: 4,
      description: "Art Boom 6500",
      timestamp: "2017-08-04T14:20:38-05:00",
      longitude: 43.1501439,
      latitude: -79.0504945,
      elevation: 300
    }
  ];

  get = () => {
    return this.data;
  };

  put = (index, payload) => {
    this.data[index] = payload;
  };

  post = payload => {
    this.data.push(payload);
  };

  delete = index => {
    this.data.splice(index, 1);
    console.log(this.data);
  };
}
