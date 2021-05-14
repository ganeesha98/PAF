package com.rest.item;

import models.Item;
import controllers.ItemController;

import java.util.List;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("ItemResources")
public class ItemResource {

	@GET
	@Path("Items")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public List<Item> getAllItems() throws Exception {
		return ItemController.getInstance().SearchAll();
	}

	@GET
	@Path("Item/{item_id}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public List<Item> getItem(@PathParam("item_id") int item_id) throws Exception {
		Item obj = new Item();
		obj.setItem_id(item_id);
		return ItemController.getInstance().Search(obj);
	}

	@POST
	@Path("Item")
	public String saveItem(Item obj) throws Exception {
		ItemController.getInstance().Save(obj);
		return "Item Saved";
	}

	@PUT
	@Path("Item")
	public String updateItem(Item obj) throws Exception {
		ItemController.getInstance().Update(obj);
		return "Item Updated";
	}

	@DELETE
	@Path("Item/{item_id}")
	public String deleteItem(@PathParam("item_id") int item_id) throws Exception {
		Item obj = new Item();
		obj.setItem_id(item_id);
		ItemController.getInstance().Delete(obj);
		return "Item Deleted";
	}
}