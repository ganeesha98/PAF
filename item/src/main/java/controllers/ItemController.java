package controllers;

import models.Item;
import dataBaseConnector.Connector;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ItemController {

	Connector con = Connector.getInstance();

	private ItemController() {
	}

	private static final ItemController obj = new ItemController();

	public static ItemController getInstance() {
		return obj;
	}

	public void Save(Item data) throws Exception {
		con.getConnection();
		con.aud("INSERT INTO item(name,category,description,price,quantity) values ('" + data.getName() + "','"
				+ data.getCategory() + "','" + data.getDescription() + "','" + data.getPrice() + "','"
				+ data.getQuantity() + "') ");
	}

	public void Update(Item data) throws Exception {
		con.getConnection();
		con.aud("UPDATE item SET name  = '" + data.getName() + "',category  = '" + data.getCategory()
				+ "',description  = '" + data.getDescription() + "',price  = '" + data.getPrice() + "',quantity  = '"
				+ data.getQuantity() + "' WHERE item_id = '" + data.getItem_id() + "'");
	}

	public void Delete(Item data) throws Exception {
		con.getConnection();
		con.aud("DELETE FROM item WHERE item_id = '" + data.getItem_id() + "'");
	}

	public List<Item> SearchAll() throws Exception {
		List<Item> objList = new ArrayList<Item>();
		con.getConnection();
		ResultSet rset = con.srh("SELECT * FROM item");
		while (rset.next()) {
			Item obj = new Item();
			obj.setItem_id(rset.getInt(1));
			obj.setName(rset.getString(2));
			obj.setCategory(rset.getString(3));
			obj.setDescription(rset.getString(4));
			obj.setPrice(rset.getString(5));
			obj.setQuantity(rset.getString(6));
			objList.add(obj);
		}

		return objList;
	}

	public List<Item> Search(Item data) throws Exception {
		List<Item> objList = new ArrayList<Item>();
		con.getConnection();
		ResultSet rset = con.srh("SELECT * FROM item WHERE item_id = '" + data.getItem_id() + "'");
		while (rset.next()) {
			Item obj = new Item();
			obj.setItem_id(rset.getInt(1));
			obj.setName(rset.getString(2));
			obj.setCategory(rset.getString(3));
			obj.setDescription(rset.getString(4));
			obj.setPrice(rset.getString(5));
			obj.setQuantity(rset.getString(6));
			objList.add(obj);
		}

		return objList;
	}

}