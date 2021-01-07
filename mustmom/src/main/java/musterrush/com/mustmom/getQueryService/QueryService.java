package musterrush.com.mustmom.getQueryService;
import java.util.List;

import musterrush.com.mustmom.customerQuery.CustomerQuery;

public interface QueryService {
	public List<CustomerQuery> getCustomerQuery();

	public CustomerQuery addCustomerQuery(CustomerQuery Query);
}
