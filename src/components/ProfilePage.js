
export default function ProfilePage({ user }) {
    console.log(user)
    return(
        <div>
            {user && <div>{user.displayName}</div>}
        </div>
    )
}