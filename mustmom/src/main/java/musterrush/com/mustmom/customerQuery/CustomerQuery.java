package musterrush.com.mustmom.customerQuery;

public class CustomerQuery {
	private String Email;
	private String PhnNo;
	private String QueryType;
	private String Query;
	private String QueryDate;
	
	public CustomerQuery(String email, String phnNo, String queryType, String query, String queryDate) {
		super();
		Email = email;
		PhnNo = phnNo;
		QueryType = queryType;
		Query = query;
		QueryDate = queryDate;
	}

	public CustomerQuery() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getPhnNo() {
		return PhnNo;
	}

	public void setPhnNo(String phnNo) {
		PhnNo = phnNo;
	}

	public String getQueryType() {
		return QueryType;
	}

	public void setQueryType(String queryType) {
		QueryType = queryType;
	}

	public String getQuery() {
		return Query;
	}

	public void setQuery(String query) {
		Query = query;
	}

	public String getQueryDate() {
		return QueryDate;
	}

	public void setQueryDate(String queryDate) {
		QueryDate = queryDate;
	}

	@Override
	public String toString() {
		return "customerQuery [Email=" + Email + ", PhnNo=" + PhnNo + ", QueryType=" + QueryType + ", Query=" + Query
				+ ", QueryDate=" + QueryDate + ", getEmail()=" + getEmail() + ", getPhnNo()=" + getPhnNo()
				+ ", getQueryType()=" + getQueryType() + ", getQuery()=" + getQuery() + ", getQueryDate()="
				+ getQueryDate() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	
}
