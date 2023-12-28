import accountData from '../datas/data-account'
import AccountItem from './accountItems'


function Account() {
  return (
    <>
      <h2 className='sr-only'>Accounts</h2>
      {accountData.map(accountItem => (
        <AccountItem
          key={accountItem.id}
          title={accountItem.title}
          amount={accountItem.amount}
          description={accountItem.description}
        />
      ))}
    </>
  )
}

export default Account