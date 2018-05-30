import React from 'react';

class Impression extends React.Component {
  render() {
    return(
      <div className="container-fluid border">
        <div className="row header">
          <div className="col-sm-6"><label>Evaluator impression: 10%</label></div>
          <div className="col-sm-4">
              <div className="form-group">
                 <select className="form-control" id="experience">
                   <option>Select</option>
                     <option>0</option>
                     <option>2</option>
                     <option>4</option>
                     <option>6</option>
                     <option>8</option>
                     <option>10</option>
                 </select>
              </div>
          </div>
        </div>
        <div className="row color">
            <div className="col-sm-12"><label>How to note: </label></div>
        </div>

        <div className="row">
          <div className="col-sm-2">0</div>
          <div className="col-sm-10"><p>He is not able to communicate, he lacks basic social skils</p></div>
        </div>
        <div className="row">
          <div className="col-sm-2">2</div>
          <div className="col-sm-10"><p>He is able to comunicate if he is helped by the interviewer. Very shy</p></div>
        </div>
        <div className="row">
          <div className="col-sm-2">4</div>
          <div className="col-sm-10"><p>He communicates well, but he is very slow in expressing an idea or giving an answer</p></div>
        </div>
        <div className="row">
          <div className="col-sm-2">6</div>
          <div className="col-sm-10"><p>He communicates well and he can handle himself</p></div>
        </div>
        <div className="row">
          <div className="col-sm-2">8</div>
          <div className="col-sm-10"><p>He has a very open atitude and is a very pleasant person to talk to</p></div>
        </div>
        <div className="row">
          <div className="col-sm-2">10</div>
          <div className="col-sm-10"><p>He has a very open atitude, is a very pleasant person to talk to, he asks very good questions and he has a very good logical mind</p></div>
        </div>
      </div>
    )
  }
}

export default Impression;
