import { useEffect } from "react";
import { connect } from 'react-redux'
import { fetchUsers } from "../redux/Reducer/userReducer/UserReducer";

var offSet = 1

function UserProfile({ fetchUsers, Data }) {

  const handleScroll = (e) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      // console.log("bottom")
      offSet += 5
      fetchUsers()
      console.log(offSet)
    }
  }


  useEffect(() => {
    fetchUsers()
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div style={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15px",
      }}>
        <div style={{
          height: "100vh",
          marginTop: "15px",
        }}>
          {
            Data.data?.map((item) => {
              // console.log(item)
              return (
                <ul key={item.id}>
                  <span>{item.id}</span>
                  <p >{item.title}</p>
                </ul>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    Data: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers(offSet))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)