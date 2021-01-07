package musterrush.com.mustmom.getQueryService;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import musterrush.com.mustmom.customerQuery.CustomerQuery;

@Service
public class QueryServiceImpl implements QueryService {

	List<CustomerQuery> list;
	
	public QueryServiceImpl() {
		
		list = new ArrayList<>();
		list.add(new CustomerQuery("Shibam@gmail.com","8250486117","Order","Hi Shibam","01-01-2021"));
		list.add(new CustomerQuery("Shibam@gmail.com","8250486118","Order","Hi Ansu","01-01-2021"));
		list.add(new CustomerQuery("Shibam@gmail.com","8250486118","Order","Hi Santy","01-01-2021"));
		list.add(new CustomerQuery("Shibam@gmail.com","8250486118","Order","Hi Tuli","01-01-2021"));
		list.add(new CustomerQuery("Shibam@gmail.com","8250486118","Order","Hi Souvik","01-01-2021"));
	}
	
	
	
	
	@Override
	public List<CustomerQuery> getCustomerQuery() {
		
		return list;
	}
	
	@Override
	public CustomerQuery addCustomerQuery(CustomerQuery Query) {
		list.add(Query);
		return Query;
	}

}
