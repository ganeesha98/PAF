package models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Item {

	private int item_id;
	private String name;
	private String category;
	private String description;
	private String price;
	private String quantity;

	public Item() {
	}

	public Item(int item_id) {
		this.item_id = item_id;
	}

	public Item(int item_id, String name, String category, String description, String price, String quantity) {
		this.item_id = item_id;
		this.name = name;
		this.category = category;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
	}

	public int getItem_id() {
		return item_id;
	}

	public void setItem_id(int item_id) {
		this.item_id = item_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

}