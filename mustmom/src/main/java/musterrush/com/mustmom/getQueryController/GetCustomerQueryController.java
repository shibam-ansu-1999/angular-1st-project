package musterrush.com.mustmom.getQueryController;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import musterrush.com.mustmom.customerQuery.CustomerQuery;
import musterrush.com.mustmom.getQueryService.QueryService;


@RestController
public class GetCustomerQueryController {
	@Autowired
	QueryService queryService;
	
	
	@PostMapping("/getCustomerQuery")
	public List<CustomerQuery> getCustomerQuery(){
		return queryService.getCustomerQuery();
	}
	
	@PostMapping("/addCustomerQuery")
	@ResponseBody
	public CustomerQuery addCustomerQuery(@RequestBody CustomerQuery Query) {
		return queryService.addCustomerQuery(Query);
	}
	
}
